"use client";

import { Button } from "@/lib/components/core/default/button";
import { toast } from "@/lib/components/core/default/toast";

export default function ToastDemo() {
  return (
    <Button
      onPress={() =>
        toast("Event has been created", { onUndo: () => console.log("undo") })
      }
    >
      Show toast
    </Button>
  );
}