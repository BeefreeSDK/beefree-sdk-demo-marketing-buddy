import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft, MousePointer, TrendingUp, Clock } from 'lucide-react';

const OpenRateAnalytics = () => {
  const navigate = useNavigate();

  // Mock open rate data for the last 12 months
  const monthlyData = [
    { month: 'Jan', openRate: 32.5, industryAvg: 28.2, bestTime: '10:00 AM' },
    { month: 'Feb', openRate: 34.1, industryAvg: 28.8, bestTime: '2:00 PM' },
    { month: 'Mar', openRate: 31.8, industryAvg: 29.1, bestTime: '11:00 AM' },
    { month: 'Apr', openRate: 36.2, industryAvg: 29.5, bestTime: '9:00 AM' },
    { month: 'May', openRate: 33.9, industryAvg: 30.2, bestTime: '1:00 PM' },
    { month: 'Jun', openRate: 35.7, industryAvg: 30.8, bestTime: '10:00 AM' },
    { month: 'Jul', openRate: 38.1, industryAvg: 31.2, bestTime: '8:00 AM' },
    { month: 'Aug', openRate: 35.4, industryAvg: 30.9, bestTime: '3:00 PM' },
    { month: 'Sep', openRate: 39.2, industryAvg: 31.5, bestTime: '9:00 AM' },
    { month: 'Oct', openRate: 37.8, industryAvg: 32.1, bestTime: '11:00 AM' },
    { month: 'Nov', openRate: 36.5, industryAvg: 32.8, bestTime: '2:00 PM' },
    { month: 'Dec', openRate: 34.9, industryAvg: 33.2, bestTime: '10:00 AM' }
  ];

  const avgOpenRate = monthlyData.reduce((sum, month) => sum + month.openRate, 0) / monthlyData.length;
  const bestMonth = monthlyData.reduce((prev, current) => (prev.openRate > current.openRate) ? prev : current);
  const improvement = ((monthlyData[11].openRate - monthlyData[0].openRate) / monthlyData[0].openRate * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/analytics')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Analytics
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Open Rate Analytics</h1>
              <p className="text-sm text-muted-foreground">Email engagement performance insights</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MousePointer className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{avgOpenRate.toFixed(1)}%</h3>
                <p className="text-sm text-muted-foreground">Average Open Rate</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-success/10">
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{bestMonth.openRate}%</h3>
                <p className="text-sm text-muted-foreground">Best Month ({bestMonth.month})</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-warning/10">
                <Clock className="h-5 w-5 text-warning" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{improvement.toFixed(1)}%</h3>
                <p className="text-sm text-muted-foreground">Year-over-Year Growth</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Open Rate vs Industry Average</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="industryAvg" 
                  stackId="1"
                  stroke="hsl(var(--muted-foreground))" 
                  fill="hsl(var(--muted))"
                />
                <Area 
                  type="monotone" 
                  dataKey="openRate" 
                  stackId="2"
                  stroke="hsl(var(--primary))" 
                  fill="hsl(var(--primary)/0.3)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Monthly Open Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="openRate" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Insights and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Best Performing Times</h3>
            <div className="space-y-4">
              {[
                { time: '9:00 AM', rate: '39.2%', description: 'Peak morning engagement' },
                { time: '2:00 PM', rate: '36.8%', description: 'Afternoon productivity break' },
                { time: '10:00 AM', rate: '35.7%', description: 'Mid-morning check-in' },
                { time: '11:00 AM', rate: '34.9%', description: 'Pre-lunch engagement' },
                { time: '1:00 PM', rate: '33.9%', description: 'Lunch hour browsing' }
              ].map((time, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{time.time}</h4>
                    <p className="text-xs text-muted-foreground">{time.description}</p>
                  </div>
                  <span className="font-semibold text-success">{time.rate}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Subject Line Analysis</h3>
            <div className="space-y-4">
              {[
                { category: 'Personalized', rate: '42.1%', example: 'Hey [Name], special offer inside!' },
                { category: 'Question-based', rate: '38.7%', example: 'Ready to boost your sales?' },
                { category: 'Urgency', rate: '36.5%', example: 'Last chance: 50% off ends today' },
                { category: 'Benefit-focused', rate: '34.2%', example: 'Save time with our new feature' },
                { category: 'Newsletter', rate: '29.8%', example: 'Weekly roundup: Industry news' }
              ].map((subject, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm">{subject.category}</h4>
                    <span className="font-semibold text-success text-sm">{subject.rate}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic">"{subject.example}"</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpenRateAnalytics;