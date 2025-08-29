import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Target, TrendingUp, Sparkles } from 'lucide-react';
import BuddyMascot from '@/components/BuddyMascot';

interface RevenuePredictionProps {
  campaignData?: {
    segment: string;
    recipientCount: number;
    offerType: string;
    contentLength: number;
    featuredProducts: number;
  };
}

interface PredictionResult {
  immediateRevenue: number;
  total30dRevenue: number;
  perRecipient: number;
  confidence: number;
}

const RevenuePrediction: React.FC<RevenuePredictionProps> = ({ campaignData }) => {
  const navigate = useNavigate();
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate prediction calculation
  const calculatePrediction = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock prediction calculation
    const baseRevenue = Math.random() * 50000 + 10000;
    const confidenceScore = Math.random() * 0.3 + 0.7; // 70-100%
    
    const mockPrediction: PredictionResult = {
      immediateRevenue: Math.round(baseRevenue),
      total30dRevenue: Math.round(baseRevenue * 1.42),
      perRecipient: Math.round(baseRevenue / (campaignData?.recipientCount || 1000) * 100) / 100,
      confidence: Math.round(confidenceScore * 100) / 100
    };
    
    setPrediction(mockPrediction);
    setIsLoading(false);
  };

  useEffect(() => {
    if (campaignData) {
      calculatePrediction();
    }
  }, [campaignData]);

  if (!campaignData) {
    return (
      <Card className="card-buddy p-8 text-center">
        <BuddyMascot variant="thinking" size="lg" className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Ready to Predict Revenue?</h3>
        <p className="text-muted-foreground mb-4">
          Set up your campaign parameters to see revenue forecasts
        </p>
        <Button variant="buddy" size="lg">
          Configure Campaign
        </Button>
      </Card>
    );
  }

  return (
    <Card className="card-buddy">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Revenue Forecast</h3>
          <BuddyMascot 
            variant="thinking" 
            size="sm" 
            message={isLoading ? "Calculating..." : "Looking good!"} 
          />
        </div>

        {isLoading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-muted rounded"></div>
            <div className="h-8 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-3/4"></div>
          </div>
        ) : prediction ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Immediate Revenue</span>
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${prediction.immediateRevenue.toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-br from-success/5 to-success/10 rounded-lg p-4 border border-success/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium text-muted-foreground">30-Day Projected</span>
                </div>
                <div className="text-2xl font-bold revenue-glow">
                  ${prediction.total30dRevenue.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Revenue per recipient:</span>
                <span className="font-semibold">${prediction.perRecipient}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Prediction Confidence</span>
                </div>
                <div className="progress-buddy">
                  <div 
                    className="progress-buddy-fill" 
                    style={{ width: `${prediction.confidence * 100}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm font-medium">
                  {Math.round(prediction.confidence * 100)}% Confidence
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button 
                variant="success-gradient" 
                className="w-full" 
                size="lg"
                onClick={() => navigate('/email-editor')}
              >
                Launch Campaign
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Unable to generate prediction. Please try again.</p>
            <Button 
              variant="outline" 
              onClick={calculatePrediction}
              className="mt-4"
            >
              Retry Calculation
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RevenuePrediction;