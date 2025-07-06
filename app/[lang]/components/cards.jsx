import Image from 'next/image'
import Link from 'next/link'

export const Cards = ({ dict }) => {
  return (
    <section className="mx-auto my-10 flex max-w-[1730px] items-center justify-between gap-10 px-10 lg:mt-10 lg:mb-30">
      <Card
        image="/images/card-1.png"
        title={dict.home.cards.card_1.title}
        description={dict.home.cards.card_1.description}
        link="/"
      />
      <Card
        image="/images/card-2.png"
        title={dict.home.cards.card_2.title}
        description={dict.home.cards.card_2.description}
        link="/"
      />
      <Card
        image="/images/card-3.png"
        title={dict.home.cards.card_3.title}
        description={dict.home.cards.card_3.description}
        link="/"
      />
    </section>
  )
}

const Card = ({ image, title, description, link }) => {
  return (
    <div>
      <h3 className="font-semibold text-[#4B4B4B]">{title}</h3>
      <div className="relative mt-6 h-71 w-md">
        <Image
          src={image}
          alt="Cards"
          width={1200}
          height={800}
          className="h-full w-full rounded-[20px] object-cover"
        />

        <Link href={link} className="absolute right-6 bottom-4 rounded-[10px] bg-white px-3 py-2.5">
          Ver Caso &gt;&gt;
        </Link>
      </div>
      <p className="mt-7.5 w-2/3 text-xl text-[#636363]">{description}</p>
    </div>
  )
}
