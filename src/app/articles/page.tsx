import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
       title="撰写有关软件设计、学习方法和教育的文章。"
       intro="我所有有关软件设计、学习方法和教育等方面的长篇想法，按时间顺序收集。">
      {/* <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div> */}
{/* 这段代码是一个React组件，它包含一个带有一些CSS类的`<div>`元素，以及一个使用`map`函数渲染`Article`组件的循环。让我来解释一下其中涉及到的一些部分：

1. `className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"`：这是React中设置元素类名的方式。这里应用了一些CSS类，例如`md:border-l`表示在中等屏幕尺寸上添加左边框，`md:border-zinc-100`表示边框颜色为锌色，`md:pl-6`表示在中等屏幕尺寸上添加左内边距为6个单位，`md:dark:border-zinc-700/40`表示在暗色模式下边框颜色为深色锌色，并且透明度为40%。

2. `<div className="flex max-w-3xl flex-col space-y-16">`：这是另一个`<div>`元素，应用了一些Flex布局相关的CSS类。`flex`表示使用Flex布局，`max-w-3xl`表示最大宽度为3xl（这可能是一个特定的尺寸值），`flex-col`表示垂直方向的Flex布局，`space-y-16`表示垂直方向上子元素之间的间距为16个单位。

3. `{articles.map((article) => (
    <Article key={article.slug} article={article} />
  ))}`：这是一个JavaScript表达式，使用`map`函数遍历`articles`数组中的每个元素，并为每个`article`渲染一个`<Article>`组件。在这里，`key={article.slug}`用于React的列表渲染优化，`article={article}`将`article`对象传递给`<Article>`组件。

总体来说，这段代码的作用是渲染一个带有特定样式的容器，并在容器内部根据`articles`数组中的数据渲染多个`<Article>`组件。 */}

    </SimpleLayout>
  )
}
