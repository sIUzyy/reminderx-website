import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

// ---- icon ----
import { ArrowDownToLine } from "lucide-react";

// ---- react ----
import { useState } from "react";

// ---- library ----
import { saveAs } from "file-saver"; // file-saver

export default function ActivateModal({ open, setOpen }) {
  // ---- state to handle input
  const [inputValue, setInputValue] = useState("");

  // ---- state for rx model
  const [rxModel] = useState("reminderx-v2-2025");

  // ---- loading and error state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDownload = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (!inputValue) {
        setError("Model field cannot be empty.");
        setIsLoading(false);
        return;
      }

      if (inputValue === rxModel) {
        const fileUrl = `https://github.com/sIUzyy/reminderx-website/releases/download/v2.0.0/application-84725f8e-3aca-4865-83b1-c26342f30cb0.apk`;

        saveAs(fileUrl, `reminderx.apk`); // triggers download
        setOpen(false);
      } else {
        setError(
          "Model does not exist. Please check your model and try again."
        );
      }

      setIsLoading(false); // Stop loading after execution
    }, 500); // Small delay to simulate loading
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center sm:mx-0 sm:size-10">
                  <ArrowDownToLine />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900 tracking-widest font-roboto"
                  >
                    Download RemindeRx App
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Before you can download the app, please enter your
                      RemindeRx model. You can find it on the left side of the
                      pillbox.
                    </p>

                    <input
                      type="text"
                      placeholder="Enter reminderx model "
                      className="border-1 border-gray-300 w-full rounded-sm py-4 px-2 mt-2 focus:border-indigo-500 focus:outline-none "
                      value={inputValue}
                      onChange={(e) => {
                        setInputValue(e.target.value);
                        if (error) setError("");
                      }}
                    />
                    {error && (
                      <p className="font-roboto tracking-wider text-sm mt-1 text-red-500">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={handleDownload}
                className={
                  isLoading
                    ? "outline-none inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs opacity-50 cursor-progress sm:ml-3 sm:w-auto"
                    : "outline-none inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:opacity-80 cursor-pointer sm:ml-3 sm:w-auto"
                }
                disabled={isLoading}
              >
                {isLoading ? "Downloading..." : "Download App"}
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="cursor-pointer outline-none mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
