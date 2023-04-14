import * as React from "react";
import { type FormAction, action } from "./actions";

export type FormProps = {
  formAction: FormAction;
  actionURL?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

export function Form({ formAction, children, ...props }: FormProps) {
  return (
    <form {...props}>
      <input
        name="$$id"
        type="hidden"
        readOnly
        hidden
        value={formAction.$$id}
      />
      {children}
    </form>
  );
}

export function PageContent() {
  console.dir({ action }, { depth: null });
  return (
    <Form
      formAction={action as FormAction}
      className="flex gap-4 relative z-30"
      method="POST"
    >
      <input
        type="text"
        name="name"
        className="flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
      />
      <button
        type="submit"
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      >
        Submit
      </button>
    </Form>
  );
}
