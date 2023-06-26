import {useEffect, type MutableRefObject} from "react";

function assertIsNode(e: EventTarget | null): asserts e is Node {
	if (!e || !("nodeType" in e)) {
		throw new Error("Node expected");
	}
}

export default function useOutsideClick(ref: MutableRefObject<any>, callback: () => void) {
	useEffect(() => {
	  const onClick = ({target}: globalThis.MouseEvent) => {
			assertIsNode(target);
			if (!ref?.current?.contains(target)) {
		  callback();
			}
	  };

	  document.addEventListener("mousedown", onClick);
	  return () => {
			document.removeEventListener("mousedown", onClick);
	  };
	}, [ref]);
}
