# QAQ

## Descriptionヾ(≧∪≦*)ノ〃
A lib of Yanwen font


## Install ＼(＠＾０＾＠)/♪

```bash
npm install @qaq/core
```

## Usage o(*≧▽≦)ツ ~ ┴┴

```ts
import { getQAQ, getRandomQAQ } from './index'

const icons = getQAQ() // you can get all icons

const happyIcon = getQAQ('happy') // you can get happy icons

const randomHappyIcon = getQAQ('happy', 5) // you can get 5 happy icons at random
```

## Type Declaration (≧ω≦)/

```ts
export interface IQAQ {
  classic: string[]
  happy: string[]
  sadness: string[]
  angry: string[]
  surprised: string[]
}

export declare const QAQ: IQAQ

export declare function getQAQ<T extends keyof IQAQ>(key?: T): any

export declare function getRandomQAQ(key: keyof IQAQ, num?: number): string[]
```

