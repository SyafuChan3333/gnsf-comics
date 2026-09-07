import { style } from "@vanilla-extract/css";

/* ビューアーセクション */
export const viewerSection = style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
})

export const episodeSelector = style({
    width: "100%",
    marginBottom: "1.5rem",
    textAlign: "center",
})

export const episodeSelectorTitle = style({
    fontSize: "0.95rem",
    color: "#64748b",
    marginBottom: "0.75rem",
})

export const episodeSelectorButtons = style({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "0.5rem",
})

export const episodeButton = style({
    background: "#fff",
    border: "1px solid #cdb5e1",
    color: "#334155",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: 500,
    transition: "all 0.2s ease",
    selectors: {
        "&:hover": {
            borderColor: "#0284c7",
            color: "#0284c7"
        },
        "&.active": {
            background: "#0284c7",
            borderColor: "#0284c7",
            color: "#fff",
            fontWeight: "bold",
            boxShadow: "0 2px 6px rgba(2, 132, 199, 0.3)",
        }
    }
})

export const episodeTitle = style({
    fontSize: "1.3rem",
    color: "#1e293b",
    marginBottom: "1.5rem",
})

/* 4コマ漫画画像表示 */
export const mangaViewer = style({
    width: "100%",
    height: "fit-content",
    maxWidth: "550px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    marginBottom: "2rem",
    border: "1px solid #e2e8f0",
    position: "relative",
})

export const mangaPanel = style({
    width: "100%",
    display: "block",
    selectors: {
        "&.active": {
            position: "relative",
            zIndex: 2
        },
        "&.hidden": {
            display: "none",
        },
        "&.prev, &.next": {
            visibility: "hidden",
            position: "absolute",
            zIndex: 1,
            top: 0,
        },
        "&.prev": {
            right: 0,
        },
        "&.next": {
            left: 0,
        },
        
    }
})

export const mangaImage = style({
    width: "100%",
    height: "auto",
    display: "block",
    margin: "0 auto",
})

/* 下部ナビゲーションコントロール */
export const navigationControls = style({
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    background: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
    border: "1px solid #e2e8f0",
})

export const navigationButton = style({
    padding: "0.5rem 1.25rem",
    borderRadius: "20px",
    border: "1px solid #0284c7",
    background: "#fff",
    color: "#0284c7",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
    selectors: {
        "&:hover:not(:disabled)": {
            background: "#0284c7",
            color: "#fff",
        },
        "&:disabled": {
            borderColor: "#cbd5e1",
            color: "#94a3b8",
            cursor: "not-allowed",
        }
    }
})

export const episodeIndicator = style({
    fontSize: "0.9rem",
    color: "#475569",
    fontWeight: "600",
})