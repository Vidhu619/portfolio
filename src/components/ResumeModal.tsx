"use client";

import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/content";

export default function ResumeModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 sm:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-paper shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <p className="text-xs uppercase tracking-[0.15em] text-ink-soft">
                Resume
              </p>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.15em]">
                <a
                  href={profile.resumeHref}
                  download="Vidhu Krishnan.pdf"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  Download
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="text-ink-soft transition-colors hover:text-ink"
                >
                  Close
                </button>
              </div>
            </div>
            <iframe
              src={`${profile.resumeHref}#toolbar=0`}
              title="Resume"
              className="h-full w-full flex-1 border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
