import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const MortgageGuide = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(5000000);
  const [initialPayment, setInitialPayment] = useState<number>(1500000);
  const [rate, setRate] = useState<number>(10);
  const [years, setYears] = useState<number>(20);

  const loanAmount = propertyPrice - initialPayment;
  const monthlyRate = rate / 100 / 12;
  const monthsTotal = years * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, monthsTotal)) / (Math.pow(1 + monthlyRate, monthsTotal) - 1);
  const totalPayment = monthlyPayment * monthsTotal;
  const overpayment = totalPayment - loanAmount;

  const programs = [
    {
      name: 'Семейная ипотека',
      icon: 'Users',
      rate: '5%',
      description: 'Для семей с детьми',
      conditions: [
        'Ребенок родился после 01.01.2018',
        'Покупка жилья в новостройке',
        'Первоначальный взнос от 20%',
        'Ставка от 5% годовых'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'IT-ипотека',
      icon: 'Code',
      rate: '5%',
      description: 'Для IT-специалистов',
      conditions: [
        'Работа в аккредитованной IT-компании',
        'Новостройка или вторичка',
        'Максимум 18 млн ₽',
        'Первоначальный взнос от 20%'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Военная ипотека',
      icon: 'Shield',
      rate: '~11%',
      description: 'Для военнослужащих',
      conditions: [
        'Участие в НИС не менее 3 лет',
        'Господдержка на первый взнос',
        'Ежегодные накопления',
        'Любой регион РФ'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Дальневосточная',
      icon: 'MapPin',
      rate: '2%',
      description: 'Для ДФО',
      conditions: [
        'Возраст до 35 лет',
        'Покупка жилья на Дальнем Востоке',
        'Первый взнос от 15%',
        'До 6 млн ₽ с господдержкой'
      ],
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const tips = [
    {
      icon: 'CircleDollarSign',
      title: 'Первоначальный взнос',
      text: 'Стремитесь к 30-40% от стоимости. Каждые +10% к первому взносу снижают переплату на 15-20%.'
    },
    {
      icon: 'Clock',
      title: 'Срок кредита',
      text: 'Берите минимальный срок, который комфортен. Разница между 15 и 25 годами — это +50% переплаты.'
    },
    {
      icon: 'TrendingDown',
      title: 'Досрочное погашение',
      text: 'Гасите досрочно с уменьшением СРОКА, а не платежа. Это снижает переплату в 2-3 раза быстрее.'
    },
    {
      icon: 'FileCheck',
      title: 'Налоговый вычет',
      text: 'Можно вернуть до 260 тыс. ₽ от стоимости жилья и до 390 тыс. ₽ от процентов по ипотеке.'
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            Ипотечный калькулятор
          </CardTitle>
          <CardDescription>Рассчитайте ежемесячный платеж и переплату</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="price">Стоимость недвижимости (₽)</Label>
              <Input
                id="price"
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="initial">Первоначальный взнос (₽)</Label>
              <Input
                id="initial"
                type="number"
                value={initialPayment}
                onChange={(e) => setInitialPayment(Number(e.target.value))}
                className="mt-2"
              />
              <p className="text-sm text-muted-foreground mt-1">
                {((initialPayment / propertyPrice) * 100).toFixed(1)}% от стоимости
              </p>
            </div>
            <div>
              <Label htmlFor="rate">Процентная ставка (%)</Label>
              <Input
                id="rate"
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="years">Срок кредита (лет)</Label>
              <Input
                id="years"
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="mt-2"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl space-y-4">
            <h3 className="font-semibold text-lg mb-4">Результаты расчета</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Сумма кредита</p>
                <p className="text-2xl font-bold text-foreground">{loanAmount.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Ежемесячный платеж</p>
                <p className="text-2xl font-bold text-primary">{Math.round(monthlyPayment).toLocaleString('ru-RU')} ₽</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Переплата</p>
                <p className="text-2xl font-bold text-accent">{Math.round(overpayment).toLocaleString('ru-RU')} ₽</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Общая сумма выплат:</span>
                <span className="text-2xl font-bold text-foreground">{Math.round(totalPayment).toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-secondary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-secondary" />
            Льготные программы
          </CardTitle>
          <CardDescription>Специальные условия для разных категорий граждан</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className={`bg-gradient-to-r ${program.color} text-white pb-4`}>
                  <div className="flex items-center gap-3">
                    <Icon name={program.icon} size={28} />
                    <div>
                      <CardTitle className="text-white text-lg">{program.name}</CardTitle>
                      <Badge className="bg-white/20 text-white border-white/30 mt-2">
                        Ставка от {program.rate}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mt-2">{program.description}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {program.conditions.map((condition, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
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
            Как уменьшить переплату
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon name={tip.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground">{tip.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MortgageGuide;
