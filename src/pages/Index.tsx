import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import BudgetCalculator from '@/components/BudgetCalculator';
import CreditGuide from '@/components/CreditGuide';
import MortgageGuide from '@/components/MortgageGuide';
import FinancialTips from '@/components/FinancialTips';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Wallet" size={48} className="text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Финансовый Помощник
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Управляй своими деньгами грамотно: калькулятор бюджета, советы по кредитам и ипотеке
          </p>
        </header>

        <Tabs defaultValue="calculator" className="w-full animate-slide-up">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-auto p-2 bg-white/80 backdrop-blur">
            <TabsTrigger value="calculator" className="flex flex-col items-center gap-2 py-3">
              <Icon name="Calculator" size={24} />
              <span className="text-sm font-medium">Калькулятор</span>
            </TabsTrigger>
            <TabsTrigger value="credit" className="flex flex-col items-center gap-2 py-3">
              <Icon name="CreditCard" size={24} />
              <span className="text-sm font-medium">Кредиты</span>
            </TabsTrigger>
            <TabsTrigger value="mortgage" className="flex flex-col items-center gap-2 py-3">
              <Icon name="Home" size={24} />
              <span className="text-sm font-medium">Ипотека</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex flex-col items-center gap-2 py-3">
              <Icon name="Lightbulb" size={24} />
              <span className="text-sm font-medium">Советы</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="animate-scale-in">
            <BudgetCalculator />
          </TabsContent>

          <TabsContent value="credit" className="animate-scale-in">
            <CreditGuide />
          </TabsContent>

          <TabsContent value="mortgage" className="animate-scale-in">
            <MortgageGuide />
          </TabsContent>

          <TabsContent value="tips" className="animate-scale-in">
            <FinancialTips />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
