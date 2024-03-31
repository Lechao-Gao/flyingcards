import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { useEffect } from "preact/hooks";

import { IS_BROWSER } from "$fresh/runtime.ts";

interface Props {
  children: ComponentChildren;
}

export default function VipIsland({ children }: Props) {
   useEffect(()=>{
    localStorage.setItem('lockVip', JSON.stringify({"type":"boolean","data":false}));
    localStorage.setItem('vip', false);
    location.href = '/';
   },[])

  return (
    <div>
       ...
    </div>
  );
}
