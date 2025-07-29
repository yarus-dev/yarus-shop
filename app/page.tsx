import { Heading, Paragraph } from "@/components/typography"
import { cn } from "@/lib/cn"
export default function Home() {
  return (
    <div
      className={cn`flex size-full min-h-full flex-1 flex-col items-center justify-center p-4`}
    >
      <div className={cn`max-w-prose`}>
        <Heading level={1}>Ярус — інтернет‑магазин для інженерів</Heading>
        <Paragraph>
          Тут незабаром відкриється майданчик для тих, хто творить, винаходить і
          розробляє.
        </Paragraph>
        <Paragraph>
          Ми готуємо до запуску магазин з 3D-принтерами, пластиком,
          комплектуючими для дронів і розробницькими платами.
        </Paragraph>
        <Paragraph>
          Наше завдання — зробити все необхідне для інженерів і розробників
          доступним в одному місці.
        </Paragraph>
        <Paragraph>
          Слідкуйте за оновленнями — зовсім скоро ми відкриємо двері для перших
          покупців.
        </Paragraph>
      </div>
    </div>
  )
}
