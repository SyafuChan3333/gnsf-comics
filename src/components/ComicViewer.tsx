import React from "react";
import type { Comic } from "../data/comics";
import { useCallback, useRef, useState } from "react";
import * as styles from "./ComicViewer.css";
import classNames from "classnames";
import { HtmlComment } from "./HtmlComment";

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
        <main className={styles.viewerSection}>
            <HtmlComment text="エピソード切り替えタブ" />
            <div className={styles.episodeSelector}>
                <h3 className={styles.episodeSelectorTitle}>エピソードを選択 ({comic.episodes.length}話)</h3>
                <div className={styles.episodeSelectorButtons}>
                    {comic.episodes.map((ep, idx) => (
                        <button
                            className={classNames(
                                styles.episodeButton,
                                idx === current && "active"
                            )}
                            data-ep-index={idx}
                            onClick={() => openEpisode(idx)}
                            key={`ep-btn-${idx}`}
                        >
                            {ep.title}
                        </button>
                    ))}
                </div>
            </div>

            <HtmlComment text="エピソードタイトル"/>
            <h2 id="ep-title" className={styles.episodeTitle}>{comic.episodes[current]?.title}</h2>

            <HtmlComment text="4コマ漫画表示領域"/>
            <div className={styles.mangaViewer} ref={mangaAreaHandle}>
                {comic.episodes.map((ep, idx) => (
                    <div
                        className={classNames(
                            styles.mangaPanel,
                            idx === current - 1 ? "prev" :
                                idx === current ? "active" :
                                    idx === current + 1 ? "next" :
                                        "hidden"
                        )}
                        id={`ep-panel-${idx}`}
                        key={`ep-panel-${idx}`}
                    >
                        <img
                            src={ep.imageUrl}
                            alt={`${comic.title} ${ep.title}`}
                            className={styles.mangaImage}
                            loading={current - 1 <= idx || idx <= current + 1 ? "eager" : "lazy"}
                        />
                    </div>
                ))}
            </div>

            <HtmlComment text="ナビゲーションコントロール"/>
            <div className={styles.navigationControls}>
                <button id="prev-btn" className={styles.navigationButton} onClick={openPrev} disabled={current === 0}>← 前の話</button>
                <span id="episode-indicator" className={styles.episodeIndicator}>{current + 1} / {comic.episodes.length} 話</span>
                <button id="next-btn" className={styles.navigationButton} onClick={openNext} disabled={current === comic.episodes.length - 1}>次の話 →</button>
            </div>
        </main>
    )
}