import { Code } from '@nextui-org/code';
import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { button as buttonStyles } from '@nextui-org/theme';

import { SearchIcon } from '@/components/icons';
import { subtitle, title } from '@/components/primitives';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>欢迎来到&nbsp;</span>
        <span className={title({ color: 'violet' })}>小桃分享社&nbsp;</span>
        <br />
        <span className={title()}>分享生活、好物攻略</span>
        <div className={subtitle({ class: 'mt-4' })}>
          让我们一起，开启探索吧
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href="/news"
        >
          线报中心
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href="/search"
        >
          <SearchIcon size={20} />
          开启搜索
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            <Code color="primary">复制口令，打开对应app</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
