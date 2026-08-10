export interface SocialLink {
    platform: string;
    url: string;
}

export interface Creator {
    name: string;
    role: string;
    avatarUrl?: string;
    socialLinks: SocialLink[];
}

export interface Episode {
    id: number;
    title: string;
    imageUrl: string;
    featuredCreators?: Creator[];
}

export interface Comic {
    slug: string;
    title: string;
    description: string;
    coverImage: string;
    logoText: string;
    episodesCount: number;
    badge: string;
    author: Creator;
    featuredCreators?: Creator[];
    episodes: Episode[];
}

export const comicsData: Comic[] = [
    {
        slug: 'ryusei-rotan',
        title: '流星ろたん 4コマ劇場',
        description: '',
        coverImage: '/comics/ryusei-rotan/ryusei-rotan-logo.jpg',
        logoText: '流星ろたん',
        episodesCount: 6,
        badge: '連載中',
        author: {
            name: '流星ろたん',
            role: '出演',
            socialLinks: [
                { platform: 'X (Twitter)', url: 'https://x.com/RyuseiRotan' },
                { platform: 'YouTube', url: 'https://www.youtube.com/channel/UC0InrNgDrH-4irmIVHT_dwQ' }
            ]
        },
        episodes: [
            {
                id: 1,
                title: '第1話',
                imageUrl: '/comics/ryusei-rotan/rotan_001.jpg',

            },
            {
                id: 2,
                title: '第2話',
                imageUrl: '/comics/ryusei-rotan/rotan_002.jpg',

            },
            {
                id: 3,
                title: '第3話',
                imageUrl: '/comics/ryusei-rotan/rotan_003.png',

            },
            {
                id: 4,
                title: '第4話',
                imageUrl: '/comics/ryusei-rotan/rotan_004.png',

            },
            {
                id: 5,
                title: '第5話',
                imageUrl: '/comics/ryusei-rotan/rotan_005.png',

            },
            {
                id: 6,
                title: '第6話',
                imageUrl: '/comics/ryusei-rotan/rotan_006.png',

            }
        ]
    },
    {
        slug: 'daily-life',
        title: 'まったり日常4コマ',
        description: 'マイペースな主人公たちがおくる、クスッと笑えるまったりな日常。',
        coverImage: 'https://placehold.co/400x250/e0f2fe/0369a1?text=まったり日常4コマ',
        logoText: 'まったり日常',
        episodesCount: 2,
        badge: '完結',
        author: {
            name: 'スタジオ日常',
            role: '作者',
            socialLinks: []
        },
        episodes: [
            {
                id: 1,
                title: '第1話：あさの二度寝',
                imageUrl: 'https://placehold.co/600x1200/ffffff/333333?text=4コマ漫画+第1話%0A%0A【1コマ目】目覚まし%0A【2コマ目】あと5分%0A【3コマ目】二度寝%0A【4コマ目】遅刻！'
            },
            {
                id: 2,
                title: '第2話：ランチタイム',
                imageUrl: 'https://placehold.co/600x1200/ffffff/333333?text=4コマ漫画+第2話%0A%0A【1コマ目】お弁当%0A【2コマ目】卵焼き%0A【3コマ目】半分こ%0A【4コマ目】完食'
            }
        ]
    },
    {
        slug: 'office-cat',
        title: '会社にいるねこ先輩',
        description: 'なぜか会社でバリバリ働く猫先輩と新人社員のコミカルお仕事劇！',
        coverImage: 'https://placehold.co/400x250/fef3c7/b45309?text=会社にいるねこ先輩',
        logoText: 'ねこ先輩',
        episodesCount: 1,
        badge: '連載中',
        author: {
            name: 'ねこマスター',
            role: '作者',
            socialLinks: []
        },
        episodes: [
            {
                id: 1,
                title: '第1話：ねこ先輩登場',
                imageUrl: 'https://placehold.co/600x1200/fef3c7/1e293b?text=ねこ先輩+第1話%0A%0A【1コマ目】出社%0A【2コマ目】キーボード%0A【3コマ目】威嚇%0A【4コマ目】定時退社'
            }
        ]
    },
    {
        slug: 'sf-four-panel',
        title: 'ちょっと未来のすこし不思議',
        description: '便利になりすぎた近未来の日常を描く、1話完結のSFコメディ。',
        coverImage: 'https://placehold.co/400x250/f3e8ff/6b21a8?text=すこし不思議SF',
        logoText: 'すこし不思議SF',
        episodesCount: 1,
        badge: '連載中',
        author: {
            name: 'SF工房',
            role: '作者',
            socialLinks: []
        },
        episodes: [
            {
                id: 1,
                title: '第1話：全自動朝食ロボ',
                imageUrl: 'https://placehold.co/600x1200/f3e8ff/4c1d95?text=SF4コマ+第1話%0A%0A【1コマ目】起動%0A【2コマ目】調理%0A【3コマ目】暴走%0A【4コマ目】トースト黒こげ'
            }
        ]
    }
];
