import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TestTube, Mail, Users, TrendingUp, Clock } from 'lucide-react';

interface ABTestPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ABTestPopup: React.FC<ABTestPopupProps> = ({ isOpen, onClose }) => {
  const activeTests = [
    {
      id: 1,
      name: 'Subject Line Test',
      status: 'running',
      progress: 65,
      variantA: { subject: 'Limited Time: 50% Off Everything!', openRate: 24.3, recipients: 2500 },
      variantB: { subject: 'Your Exclusive Discount Awaits', openRate: 31.7, recipients: 2500 },
      timeRemaining: '2 days',
      winner: 'B'
    },
    {
      id: 2,
      name: 'CTA Button Color',
      status: 'completed',
      progress: 100,
      variantA: { cta: 'Blue Button', clickRate: 8.2, recipients: 3000 },
      variantB: { cta: 'Orange Button', clickRate: 12.1, recipients: 3000 },
      timeRemaining: 'Completed',
      winner: 'B'
    },
    {
      id: 3,
      name: 'Send Time Test',
      status: 'scheduled',
      progress: 0,
      variantA: { time: '9:00 AM', openRate: 0, recipients: 2000 },
      variantB: { time: '2:00 PM', openRate: 0, recipients: 2000 },
      timeRemaining: 'Starts tomorrow',
      winner: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-warning text-warning-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      case 'scheduled': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5" />
            A/B Test Dashboard
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <TestTube className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Tests</p>
                  <p className="text-lg font-bold">1</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-lg font-bold">1</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                  <p className="text-lg font-bold">1</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-secondary" />
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Lift</p>
                  <p className="text-lg font-bold text-success">+23%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Test Results */}
          <div className="space-y-4">
            <h4 className="font-medium">Current & Recent Tests</h4>
            {activeTests.map((test) => (
              <Card key={test.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h5 className="font-medium">{test.name}</h5>
                    <Badge className={getStatusColor(test.status)}>
                      {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                    </Badge>
                    {test.winner && (
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Winner: Variant {test.winner}
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {test.timeRemaining}
                  </span>
                </div>

                {test.status === 'running' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Test Progress</span>
                      <span>{test.progress}%</span>
                    </div>
                    <Progress value={test.progress} className="h-2" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Variant A */}
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h6 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      Variant A
                    </h6>
                    <p className="text-sm mb-2">
                      {test.variantA.subject || test.variantA.cta || test.variantA.time}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {test.variantA.openRate !== undefined ? 'Open Rate:' : 
                         test.variantA.clickRate !== undefined ? 'Click Rate:' : 'Recipients:'}
                      </span>
                      <span className="font-medium">
                        {test.variantA.openRate !== undefined ? `${test.variantA.openRate}%` :
                         test.variantA.clickRate !== undefined ? `${test.variantA.clickRate}%` :
                         test.variantA.recipients.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Variant B */}
                  <div className={`p-4 rounded-lg ${test.winner === 'B' ? 'bg-success/10 border border-success/20' : 'bg-muted/30'}`}>
                    <h6 className="font-medium text-sm mb-2 flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      Variant B
                      {test.winner === 'B' && <Badge variant="outline" className="text-xs">Winner</Badge>}
                    </h6>
                    <p className="text-sm mb-2">
                      {test.variantB.subject || test.variantB.cta || test.variantB.time}
                    </p>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {test.variantB.openRate !== undefined ? 'Open Rate:' : 
                         test.variantB.clickRate !== undefined ? 'Click Rate:' : 'Recipients:'}
                      </span>
                      <span className="font-medium">
                        {test.variantB.openRate !== undefined ? `${test.variantB.openRate}%` :
                         test.variantB.clickRate !== undefined ? `${test.variantB.clickRate}%` :
                         test.variantB.recipients.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="primary-gradient">
            Create New Test
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ABTestPopup;