import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

interface BudgetItem {
  name: string;
  percent: number;
  amount: number;
  icon: string;
  color: string;
}

const BudgetCalculator = () => {
  const [salary, setSalary] = useState<number>(100000);
  const [savingsGoal, setSavingsGoal] = useState<number>(500000);
  
  const [expenses, setExpenses] = useState({
    food: 25,
    transport: 10,
    entertainment: 15,
    savings: 20,
    utilities: 10,
    other: 20
  });

  const calculateAmount = (percent: number) => {
    return Math.round((salary * percent) / 100);
  };

  const budgetItems: BudgetItem[] = [
    { name: 'Питание', percent: expenses.food, amount: calculateAmount(expenses.food), icon: 'UtensilsCrossed', color: 'bg-primary' },
    { name: 'Транспорт', percent: expenses.transport, amount: calculateAmount(expenses.transport), icon: 'Car', color: 'bg-secondary' },
    { name: 'Развлечения', percent: expenses.entertainment, amount: calculateAmount(expenses.entertainment), icon: 'Gamepad2', color: 'bg-accent' },
    { name: 'Накопления', percent: expenses.savings, amount: calculateAmount(expenses.savings), icon: 'PiggyBank', color: 'bg-green-500' },
    { name: 'Коммуналка', percent: expenses.utilities, amount: calculateAmount(expenses.utilities), icon: 'Home', color: 'bg-blue-500' },
    { name: 'Прочее', percent: expenses.other, amount: calculateAmount(expenses.other), icon: 'Package', color: 'bg-purple-500' }
  ];

  const totalPercent = Object.values(expenses).reduce((a, b) => a + b, 0);
  const monthlySavings = calculateAmount(expenses.savings);
  const monthsToGoal = monthlySavings > 0 ? Math.ceil(savingsGoal / monthlySavings) : 0;

  const updateExpense = (key: keyof typeof expenses, value: number) => {
    setExpenses(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-2xl flex items-center gap-2">
            <Icon name="Calculator" size={28} className="text-primary" />
            Калькулятор бюджета
          </CardTitle>
          <CardDescription>Введите свой доход и настройте распределение расходов</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="salary" className="text-base font-semibold mb-3 block">
                Ежемесячный доход (₽)
              </Label>
              <Input
                id="salary"
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="text-lg h-12"
              />
            </div>
            <div>
              <Label htmlFor="goal" className="text-base font-semibold mb-3 block">
                Цель накоплений (₽)
              </Label>
              <Input
                id="goal"
                type="number"
                value={savingsGoal}
                onChange={(e) => setSavingsGoal(Number(e.target.value))}
                className="text-lg h-12"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="SlidersHorizontal" size={20} />
              Распределение расходов
            </h3>
            <div className="space-y-5">
              {Object.entries(expenses).map(([key, value]) => {
                const item = budgetItems.find(i => i.name.toLowerCase().includes(key.slice(0, 4)));
                return (
                  <div key={key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="font-medium flex items-center gap-2">
                        {item && <Icon name={item.icon} size={18} />}
                        {item?.name || key}
                      </Label>
                      <span className="text-sm font-semibold text-primary">{value}%</span>
                    </div>
                    <Slider
                      value={[value]}
                      onValueChange={(vals) => updateExpense(key as keyof typeof expenses, vals[0])}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Итого:</span>
                <span className={`text-lg font-bold ${totalPercent === 100 ? 'text-green-600' : 'text-red-600'}`}>
                  {totalPercent}%
                </span>
              </div>
              {totalPercent !== 100 && (
                <p className="text-sm text-muted-foreground mt-2">
                  {totalPercent > 100 ? 'Превышение на' : 'Остаток'}: {Math.abs(100 - totalPercent)}%
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-secondary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10">
          <CardTitle className="text-xl flex items-center gap-2">
            <Icon name="PieChart" size={24} className="text-secondary" />
            Ваш бюджет в цифрах
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {budgetItems.map((item) => (
              <div key={item.name} className="bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${item.color} p-2 rounded-lg`}>
                    <Icon name={item.icon} size={20} className="text-white" />
                  </div>
                  <span className="font-semibold text-sm">{item.name}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">{item.amount.toLocaleString('ru-RU')} ₽</p>
                  <p className="text-sm text-muted-foreground">{item.percent}% от дохода</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="Target" size={28} className="text-green-600" />
              <h3 className="text-xl font-bold text-green-900">Прогноз накоплений</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-green-700 mb-1">Ежемесячно откладываете:</p>
                <p className="text-3xl font-bold text-green-900">{monthlySavings.toLocaleString('ru-RU')} ₽</p>
              </div>
              <div>
                <p className="text-sm text-green-700 mb-1">До цели осталось:</p>
                <p className="text-3xl font-bold text-green-900">{monthsToGoal} мес.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetCalculator;
