import { Table } from "@/components/table"
import {
  Blockquote,
  CodeBlock,
  DefinitionList,
  Heading,
  List,
  Paragraph,
} from "@/components/typography"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TypographyPage() {
  return (
    <div className="flex-1 p-4">
      <div className="mx-auto mt-8 max-w-prose">
        <Heading level={1}>
          Перевірка типографіки: чому це важливо для інженерів
        </Heading>
        <Paragraph lead>
          У сучасному інженерному середовищі типографіка — це не лише дизайн. Це{" "}
          <b>інструмент</b>, який впливає на точність, швидкість роботи та
          ефективність передачі знань.
        </Paragraph>
        <Paragraph>
          Правильне оформлення тексту робить інструкції, креслення та технічну
          документацію більш зручними. Це зменшує кількість помилок, полегшує
          пошук потрібних даних і підвищує стандартизацію проектів.
        </Paragraph>
        <Heading level={2}>Чому інженерам важлива типографіка?</Heading>
        <DefinitionList>
          <DefinitionList.Item term="Швидкість сприйняття">
            Чіткі заголовки скорочують час пошуку потрібного розділу.
          </DefinitionList.Item>
          <DefinitionList.Item term="Уніфікація документації">
            Єдині стандарти оформлення спрощують співпрацю.
          </DefinitionList.Item>
          <DefinitionList.Item term="Зниження ризику помилок">
            виділені `ключові терміни` та кодові фрагменти мінімізують
            двозначність.
          </DefinitionList.Item>
        </DefinitionList>
        <Heading level={3}>Як виглядає погана типографіка? </Heading>
        <Paragraph>
          Погано структурований текст у технічних документах може призвести до
          катастрофічних наслідків.
        </Paragraph>
        <Paragraph>
          Уявіть, що інженер працює з мануалом, де заголовки не виділені, шрифти
          погано читаються, а код зливається з основним текстом.
        </Paragraph>
        <Paragraph>
          Результат?{" "}
          <strong>
            Помилки при збиранні, неправильні налаштування і, у гіршому випадку,
            поломки обладнання.
          </strong>
        </Paragraph>
        <Heading level={3}>Приклад форматування в технічних документах</Heading>
        <Blockquote cite="Лінус Торвальдс">
          Документація з чіткою структурою — це як креслення дрона: легко
          читати, неможливо переплутати, а збірка йде без сюрпризів.
        </Blockquote>
        <Heading level={3}>Таблиця: Основні параметри для перевірки </Heading>
        <Table className="mt-4">
          <Table.Caption>A list of your recent invoices.</Table.Caption>
          <Table.Header>
            <Table.Row>
              <Table.Head className="w-[100px]">Invoice</Table.Head>
              <Table.Head>Status</Table.Head>
              <Table.Head>Method</Table.Head>
              <Table.Head className="text-right">Amount</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {invoices.map((invoice) => (
              <Table.Row key={invoice.invoice}>
                <Table.Cell className="font-medium">
                  {invoice.invoice}
                </Table.Cell>
                <Table.Cell>{invoice.paymentStatus}</Table.Cell>
                <Table.Cell>{invoice.paymentMethod}</Table.Cell>
                <Table.Cell className="text-right">
                  {invoice.totalAmount}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan={3}>Total</Table.Cell>
              <Table.Cell className="text-right">$2,500.00</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <Heading level={3}>Розділ з додатковими параграфами </Heading>
        <Paragraph>
          Хороша типографіка — це не лише про шрифти. Вона включає оптимальний
          контраст, грамотну роботу з відступами та правильну ієрархію.
        </Paragraph>
        <Paragraph>
          Навіть у випадках, коли інженери переглядають документацію на
          маленьких екранах, кожен елемент має залишатися чітким і читабельним.
        </Paragraph>
        <Paragraph>
          Зокрема, важливо перевіряти, як виглядають{" "}
          <strong>довгі абзаци</strong> і чи не втомлює читача текст. Надмірно
          щільний текст може збільшити когнітивне навантаження, що особливо
          критично під час роботи з технічними інструкціями у польових умовах.
        </Paragraph>
        <Heading level={4}>Нумерований чекліст для тестування</Heading>
        <List ordered>
          <li>Перевірити інтерліньяж (відстань між рядками)</li>
          <li>Переглянути розміри заголовків і відступи</li>
          <li>
            Переконатись у чіткості <i>курсиву</i> та{" "}
            <strong>жирного тексту</strong>
          </li>
          <li>Оцінити вигляд таблиць, списків і цитат</li>
          <li>
            Протестувати відображення <code>кодових фрагментів</code> на різних
            пристроях
          </li>
        </List>
        <Heading level={4}>Блок коду для тестування </Heading>
        <CodeBlock>
          {`# Тестовий код для перевірки типографіки
def calculate_force(mass, acceleration):
  return mass * acceleration  # F = m * a

print(calculate_force(5, 9.81))`}
        </CodeBlock>
      </div>
    </div>
  )
}
