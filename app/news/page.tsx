import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';

async function getData(): Promise<TipOffDto[]> {
  try {
    const response = await fetch(
      `http://localhost:3001/api/v1/dtk/findTipOffList?pageId=1&pageSize=200`,
    ).then((res) => res.json());
    const result: TipOffDto[] = response?.data?.data?.list as TipOffDto[];

    return result;
  } catch {
    return [];
  }
}

export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true;

export default async function NewsPage() {
  const isFollowed = true;
  const result = await getData();

  return (
    <div className=" columns-1 md:columns-2 lg:columns-3">
      {result?.map((item) => {
        let description: string = '',
          productImage: string = '';

        item.materialShow?.forEach((item) => {
          if (item.type === 1 && item.content) {
            // content = item.content.replaceAll('[淘宝请转链]', '');
            description = item.content.replaceAll('[淘宝请转链]', '');
          }
          if (item.type === 2 && item.content) {
            productImage = item.content;
          }
        });

        return (
          <Card key={item.id} className="max-w-[340px] break-inside-avoid mb-5">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={item.headImg} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {item.groupName}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
              <Button
                className={
                  isFollowed
                    ? 'bg-transparent text-foreground border-default-200'
                    : ''
                }
                color="primary"
                radius="full"
                size="sm"
                variant={isFollowed ? 'bordered' : 'solid'}
              >
                {isFollowed ? 'Unfollow' : 'Follow'}
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>{description}</p>
              <span className="pt-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={productImage}
                  // width={270}
                />
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                {/* <p className="font-semibold text-default-400 text-small">4</p> */}
                <p className=" text-default-400 text-small">
                  {item.createTime}
                </p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  97.1K
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
