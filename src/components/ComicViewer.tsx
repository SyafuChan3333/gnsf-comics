import React from "react";
import type { Comic } from "../data/comics";
import { useCallback, useRef, useState } from "react";
import styles from "./ComicViewer.module.css";

export const ComicViewer: React.FC<{ comic: Comic }> = ({ comic }) => {
    const [current, setCurrent] = useState(0);
    const mangaAreaHandle = useRef<HTMLDivElement>(null);

    const openEpisode = useCallback((episode: number) => {
        setCurrent(episode);
        const mangaArea = mangaAreaHandle.current;
        mangaArea?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [setCurrent, mangaAreaHandle]);

    const openPrev = useCallback(() => openEpisode(current - 1), [current]);
    const openNext = useCallback(() => openEpisode(current + 1), [current]);

    return (
        <main className={styles['viewer-section']}>
            {/* エピソード切り替えタブ */}
            <div className={styles['episode-selector']}>
                <h3>エピソードを選択 ({comic.episodes.length}話)</h3>
                <div className={styles['episode-list']}>
                    {comic.episodes.map((ep, idx) => (
                        <button
                            className={`${styles['ep-btn']} ${idx === current ? styles['active'] : ''}`}
                            data-ep-index={idx}
                            onClick={() => openEpisode(idx)}
                            key={`ep-btn-${idx}`}
                        >
                            {ep.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* エピソードタイトル */}
            <div className={styles['current-episode-title']}>
                <h2 id="ep-title">{comic.episodes[current]?.title}</h2>
            </div>

            {/* 4コマ漫画表示領域 */}
            <div className={styles['manga-viewer']} ref={mangaAreaHandle}>
                {comic.episodes.map((ep, idx) => (
                    <div
                        className={`${styles['manga-panel']} ${idx === current - 1 ? styles['prev'] : idx === current ? styles['active'] : idx === current + 1 ? styles['next'] : styles['hidden']}`}
                        id={`ep-panel-${idx}`}
                        key={`ep-panel-${idx}`}
                    >
                        <img
                            src={ep.imageUrl}
                            alt={`${comic.title} ${ep.title}`}
                            className={styles['manga-image']}
                            loading={current - 1 <= idx || idx <= current + 1 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            {/* ナビゲーションコントロール */}
            <div className={styles['navigation-controls']}>
                <button id="prev-btn" className={styles['nav-btn']} onClick={openPrev} disabled={current === 0}>← 前の話</button>
                <span id="episode-indicator" className={styles['episode-indicator']}>{current + 1} / {comic.episodes.length} 話</span>
                <button id="next-btn" className={styles['nav-btn']} onClick={openNext} disabled={current === comic.episodes.length - 1}>次の話 →</button>
            </div>
        </main>
    )
}