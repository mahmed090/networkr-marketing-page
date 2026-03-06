import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { submitContact } from "../api/contact";
import { useTenantStore } from "../stores/tenantStore";
import { useContactModalStore } from "../stores/contactModalStore";
import { cn } from "../lib/cn";

const CONTACT_TRIGGER_HASHES = ["#get-started", "#demo"];

export function useContactFormTrigger() {
  const open = useContactModalStore((s) => s.open);
  return {
    /** Use as href for links that should open the contact modal instead of navigating */
    triggerHref: "#get-started",
    open,
    /** Returns true if the given href should open the contact modal */
    isContactTrigger: (href: string) =>
      typeof href === "string" &&
      CONTACT_TRIGGER_HASHES.some((h) => href === h || href.endsWith(h)),
  };
}

export default function ContactFormModal() {
  const isOpen = useContactModalStore((s) => s.isOpen);
  const close = useContactModalStore((s) => s.close);
  const siteData = useTenantStore((s) => s.siteData);
  const tenantId = useTenantStore((s) => s.tenantId);
  const formConfig = siteData.contactForm;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      close();
      resetForm();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) {
      toast.error("Please enter your name and email.");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await submitContact({
        name: trimmedName,
        email: trimmedEmail,
        phone: phone.trim() || undefined,
        subject: subject.trim() || undefined,
        tenantId,
      });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success("Message sent. We'll be in touch soon.");
      resetForm();
      close();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0"
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md max-h-[calc(100vh-2rem)] -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl bg-white shadow-xl shadow-black/10",
            "border border-gray-100 p-6 sm:p-8 flex flex-col",
            "transition-[opacity,transform] duration-200",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
            "data-[state=open]:scale-100 data-[state=closed]:scale-95",
            "focus:outline-none overflow-y-auto"
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-start justify-between gap-4 mb-6">
            <Dialog.Title className="text-xl font-semibold text-gray-900 font-display">
              {formConfig.title}
            </Dialog.Title>
            <Dialog.Close
              className={cn(
                "rounded-lg p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100",
                "transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:ring-offset-2"
              )}
              aria-label={formConfig.closeLabel}
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">
                {formConfig.nameLabel}
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={formConfig.namePlaceholder}
                required
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-shadow"
                )}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">
                {formConfig.emailLabel}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={formConfig.emailPlaceholder}
                required
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-shadow"
                )}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">
                {formConfig.phoneLabel}
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={formConfig.phonePlaceholder}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400",
                  "focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-shadow"
                )}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700">
                {formConfig.subjectLabel}{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </span>
              <textarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={formConfig.subjectPlaceholder}
                rows={3}
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg border border-gray-200 text-gray-900 placeholder:text-gray-400 resize-y min-h-[80px]",
                  "focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-300 transition-shadow"
                )}
              />
            </label>
            <div className="mt-2 flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex-1 px-4 py-2.5 rounded-lg bg-black text-white text-sm font-medium",
                  "hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending…" : formConfig.submitLabel}
              </button>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className={cn(
                    "px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-medium",
                    "hover:bg-gray-50 transition-colors"
                  )}
                >
                  {formConfig.closeLabel}
                </button>
              </Dialog.Close>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
