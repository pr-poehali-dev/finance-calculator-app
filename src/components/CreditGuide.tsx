import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const CreditGuide = () => {
  const creditTypes = [
    {
      title: 'Потребительский кредит',
      icon: 'ShoppingBag',
      rate: '8-25%',
      term: '1-5 лет',
      amount: 'до 5 млн ₽',
      pros: ['Быстрое оформление', 'Минимум документов', 'Можно потратить на что угодно'],
      cons: ['Высокая процентная ставка', 'Требуется хорошая кредитная история'],
      when: 'Подходит для покупки техники, мебели, ремонта. Берите, если можете погасить за 1-2 года.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Автокредит',
      icon: 'Car',
      rate: '5-15%',
      term: '1-7 лет',
      amount: 'до 10 млн ₽',
      pros: ['Ниже ставка, чем потребкредит', 'Автомобиль в залоге', 'Специальные программы'],
      cons: ['Авто остается в залоге', 'КАСКО обязательно', 'Первоначальный взнос 10-20%'],
      when: 'Выгоден при покупке нового авто. Сравнивайте со своими накоплениями — иногда выгоднее накопить.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Кредитная карта',
      icon: 'CreditCard',
      rate: '20-40%',
      term: 'бессрочно',
      amount: 'до 1 млн ₽',
      pros: ['Льготный период до 120 дней', 'Всегда под рукой', 'Кэшбэк и бонусы'],
      cons: ['Очень высокая ставка после льготного периода', 'Легко потратить лишнее', 'Комиссии за снятие'],
      when: 'Используйте только в льготный период! Идеально для крупных покупок с возвратом в течение 2-3 месяцев.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Рефинансирование',
      icon: 'RefreshCw',
      rate: '6-18%',
      term: '1-5 лет',
      amount: 'до 5 млн ₽',
      pros: ['Снижение ставки', 'Объединение кредитов', 'Уменьшение платежа'],
      cons: ['Требуется хорошая история', 'Комиссии за досрочное погашение', 'Новые документы'],
      when: 'Берите, если ставка на 3%+ ниже текущей и вы планируете выплачивать минимум 2 года.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const tips = [
    {
      icon: 'TrendingDown',
      title: 'Как снизить переплату',
      items: [
        'Вносите досрочные платежи с уменьшением срока',
        'Выбирайте минимальный срок, который можете потянуть',
        'Сравнивайте предложения минимум 5 банков',
        'Оформляйте зарплатную карту в банке кредитора'
      ]
    },
    {
      icon: 'AlertTriangle',
      title: 'Когда НЕ стоит брать кредит',
      items: [
        'У вас нет финансовой подушки (3-6 месяцев расходов)',
        'Платеж превышает 40% дохода',
        'Берете кредит, чтобы закрыть другой кредит',
        'Не понимаете полную стоимость кредита'
      ]
    },
    {
      icon: 'CheckCircle',
      title: 'Перед подачей заявки',
      items: [
        'Проверьте свою кредитную историю',
        'Закройте просрочки по другим кредитам',
        'Подготовьте справки о доходах',
        'Рассчитайте реальную долговую нагрузку'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="CreditCard" size={28} className="text-primary" />
            Гид по кредитам
          </CardTitle>
          <CardDescription>Когда и какой кредит выгодно брать</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {creditTypes.map((credit, index) => (
              <Card key={index} className="border-l-4 border-l-primary overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${credit.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name={credit.icon} size={32} />
                      <div>
                        <CardTitle className="text-white">{credit.title}</CardTitle>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {credit.rate}
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {credit.term}
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            {credit.amount}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-700 flex items-center gap-2">
                        <Icon name="Plus" size={16} />
                        Плюсы
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {credit.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-700 flex items-center gap-2">
                        <Icon name="Minus" size={16} />
                        Минусы
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {credit.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="X" size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <Icon name="Info" size={16} />
                      Когда брать
                    </h4>
                    <p className="text-sm text-blue-800">{credit.when}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-accent/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="Lightbulb" size={24} className="text-accent" />
            Практические советы
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {tips.map((tip, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Icon name={tip.icon} size={20} className="text-primary" />
                    <span className="font-semibold">{tip.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 ml-8">
                    {tip.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="ChevronRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreditGuide;
