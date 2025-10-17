import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const FinancialTips = () => {
  const basicTips = [
    {
      icon: 'Wallet',
      title: 'Правило 50/30/20',
      description: '50% на необходимое, 30% на желаемое, 20% на накопления',
      details: 'Базовая формула распределения дохода. Начните с этого правила, а затем адаптируйте под свою ситуацию.',
      level: 'Базовый',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Umbrella',
      title: 'Финансовая подушка',
      description: 'Накопите 3-6 месячных расходов',
      details: 'Храните в ликвидных инструментах: вклад, накопительный счет. Это ваша защита от форс-мажоров.',
      level: 'Обязательно',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'TrendingUp',
      title: 'Сначала долги, потом инвестиции',
      description: 'Закройте кредиты с высокой ставкой',
      details: 'Если у вас кредит под 20%, нет смысла инвестировать под 15%. Сначала избавьтесь от долговой нагрузки.',
      level: 'Важно',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'PiggyBank',
      title: 'Автоматизируйте накопления',
      description: 'Переводите 10-20% сразу после зарплаты',
      details: 'Настройте автоплатеж на накопительный счет в день зарплаты. Откладывайте деньги до того, как их потратите.',
      level: 'Базовый',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const advancedTips = [
    {
      icon: 'BarChart3',
      title: 'Диверсификация',
      content: 'Не держите все деньги в одном месте. Распределите между депозитами, облигациями, акциями и недвижимостью в зависимости от целей и горизонта.'
    },
    {
      icon: 'Target',
      title: 'Цели и сроки',
      content: 'Краткосрочные цели (до года) — депозиты. Среднесрочные (1-5 лет) — облигации и смешанные фонды. Долгосрочные (5+ лет) — акции и недвижимость.'
    },
    {
      icon: 'Calculator',
      title: 'Реинвестирование',
      content: 'Проценты и дивиденды сразу реинвестируйте. Сложный процент творит чудеса: под 10% годовых через 20 лет ваш капитал вырастет в 6.7 раз.'
    },
    {
      icon: 'ShieldCheck',
      title: 'Страхование',
      content: 'Обязательно: ОМС, ОСАГО. Желательно: накопительное страхование жизни, ДМС через работодателя. Опционально: страхование имущества.'
    }
  ];

  const mistakes = [
    {
      icon: 'XCircle',
      title: 'Импульсивные покупки',
      text: 'Введите правило 48 часов: перед крупной покупкой подождите 2 дня. В 70% случаев желание пройдет.'
    },
    {
      icon: 'CreditCard',
      title: 'Жизнь в долг',
      text: 'Если платежи по кредитам превышают 40% дохода — вы в финансовой яме. Срочно сокращайте расходы и рефинансируйтесь.'
    },
    {
      icon: 'TrendingDown',
      title: 'Игнорирование инфляции',
      text: 'Деньги под подушкой теряют 5-7% покупательной способности ежегодно. Минимум держите их на накопительном счете.'
    },
    {
      icon: 'AlertTriangle',
      title: 'Отсутствие бюджета',
      text: 'Не знаете, куда уходят деньги? Начните записывать расходы хотя бы 2 недели. Результаты вас удивят.'
    }
  ];

  const resources = [
    { name: 'Госуслуги', description: 'Проверка налогов и кредитной истории', icon: 'FileCheck', url: 'https://gosuslugi.ru' },
    { name: 'ЦБ РФ', description: 'Калькуляторы и финансовая грамотность', icon: 'Building2', url: 'https://cbr.ru' },
    { name: 'Финуслуги', description: 'Сравнение банковских продуктов', icon: 'Search', url: 'https://fincult.info' },
    { name: 'Налог.ру', description: 'Налоговые вычеты и декларации', icon: 'Receipt', url: 'https://nalog.gov.ru' }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Lightbulb" size={28} className="text-primary" />
            Основы финансовой грамотности
          </CardTitle>
          <CardDescription>С чего начать управление личными финансами</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {basicTips.map((tip, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${tip.color} text-white pb-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name={tip.icon} size={28} />
                      <div>
                        <CardTitle className="text-white text-lg">{tip.title}</CardTitle>
                        <Badge className="bg-white/20 text-white border-white/30 mt-2">
                          {tip.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mt-3 font-medium">{tip.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">{tip.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-secondary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="GraduationCap" size={24} className="text-secondary" />
            Продвинутые стратегии
          </CardTitle>
          <CardDescription>Для тех, кто освоил базу</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {advancedTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name={tip.icon} size={28} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="AlertTriangle" size={24} className="text-red-600" />
            Типичные ошибки
          </CardTitle>
          <CardDescription>Что не стоит делать со своими деньгами</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {mistakes.map((mistake, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border-2 border-red-100">
                <div className="flex items-start gap-3">
                  <Icon name={mistake.icon} size={24} className="text-red-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2 text-red-900">{mistake.title}</h4>
                    <p className="text-sm text-gray-700">{mistake.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-accent/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="Link" size={24} className="text-accent" />
            Полезные ресурсы
          </CardTitle>
          <CardDescription>Проверенные источники информации</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-border hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name={resource.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1 flex items-center gap-2">
                      {resource.name}
                      <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                    </h4>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialTips;
