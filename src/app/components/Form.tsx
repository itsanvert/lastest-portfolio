"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function Form() {
  return (
    <form className="flex justify-between gap-4 flex-col md:flex-row">
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={1}
        placeholder="Your Message..."
        required
      />

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit">Sign for free</Button>
      )}
    </>
  );
}
