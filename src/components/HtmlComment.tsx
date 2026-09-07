import React, { useLayoutEffect as _useLayoutEffect, useEffect, useRef } from "react"

const useLayoutEffect = typeof window !== "undefined" ? _useLayoutEffect : useEffect;

export const HtmlComment: React.FC<{ text?: string }> = ({ text }) => {
    const scriptRef = useRef<HTMLScriptElement>(null);
    const commRef = useRef<Comment>(null);

    useLayoutEffect(() => {
        if (!scriptRef.current) return;
        const script = scriptRef.current;
        const doc = script.ownerDocument;
        const parent = script.parentNode;
        const commentText = ` ${text?.trim() ?? ""} `;
        if (!commRef.current) commRef.current = doc.createComment(commentText);
        else commRef.current.nodeValue = commentText;
        const comm = commRef.current;

        if (parent?.contains(script))
            parent.replaceChild(comm, script);
        return () => {
            if (script && parent?.contains(comm))
                parent.replaceChild(script, comm);
        }
    }, [text])
    
    return (
        <script ref={scriptRef} type="text/plain" data-type="html-comment">{text}</script>
    )
}