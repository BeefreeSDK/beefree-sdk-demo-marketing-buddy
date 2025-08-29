import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import BuddyMascot from '@/components/BuddyMascot';

interface Recommendation {
  productId: string;
  productName: string;
  confidence: number;
  support: number;
  lift: number;
  sales: number;
}

interface RecommendationEngineProps {
  selectedProduct?: string;
}

const RecommendationEngine: React.FC<RecommendationEngineProps> = ({ selectedProduct }) => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock product data
  const mockProducts = [
    { id: 'PROD-101', name: 'Wireless Headphones', category: 'Electronics' },
    { id: 'PROD-202', name: 'Smartphone Case', category: 'Accessories' },
    { id: 'PROD-303', name: 'Portable Charger', category: 'Electronics' },
    { id: 'PROD-404', name: 'Bluetooth Speaker', category: 'Electronics' },
    { id: 'PROD-505', name: 'Screen Protector', category: 'Accessories' },
  ];

  const generateRecommendations = async (productId: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate mock recommendations
    const mockRecs: Recommendation[] = mockProducts
      .filter(p => p.id !== productId)
      .map(product => ({
        productId: product.id,
        productName: product.name,
        confidence: Math.floor(Math.random() * 40) + 60, // 60-100%
        support: Math.floor(Math.random() * 20) + 10, // 10-30%
        lift: Math.round((Math.random() * 1.5 + 0.5) * 100) / 100, // 0.5-2.0
        sales: Math.floor(Math.random() * 1000) + 100
      }))
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 3);
    
    setRecommendations(mockRecs);
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedProduct) {
      generateRecommendations(selectedProduct);
    }
  }, [selectedProduct]);

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'text-success';
    if (confidence >= 60) return 'text-warning';
    return 'text-muted-foreground';
  };

  const getConfidenceBadgeVariant = (confidence: number): "default" | "secondary" | "destructive" | "outline" => {
    if (confidence >= 80) return 'default';
    if (confidence >= 60) return 'secondary';
    return 'outline';
  };

  if (!selectedProduct) {
    return (
      <Card className="card-buddy p-8 text-center">
        <BuddyMascot variant="default" size="lg" className="mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Product Recommendations</h3>
        <p className="text-muted-foreground mb-4">
          Select a product to see intelligent recommendations based on customer behavior
        </p>
        <div className="grid grid-cols-2 gap-2">
          {mockProducts.slice(0, 4).map(product => (
            <Button
              key={product.id}
              variant="outline"
              size="sm"
              onClick={() => generateRecommendations(product.id)}
              className="text-xs"
            >
              {product.name}
            </Button>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="card-buddy">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-secondary/20">
            <Sparkles className="h-5 w-5 text-secondary" />
          </div>
          <h3 className="text-lg font-semibold">Smart Recommendations</h3>
          <BuddyMascot 
            variant="default" 
            size="sm" 
            message={isLoading ? "Analyzing patterns..." : "Found great matches!"} 
          />
        </div>

        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground mb-1">Base Product:</p>
          <p className="font-medium">
            {mockProducts.find(p => p.id === selectedProduct)?.name || selectedProduct}
          </p>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-16 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-3">
              Customers who bought this also bought:
            </h4>
            
            {recommendations.map((rec, index) => (
              <div 
                key={rec.productId}
                className="bg-gradient-to-r from-card to-muted/20 rounded-lg p-4 border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-semibold text-primary">
                      #{index + 1}
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">{rec.productName}</h5>
                      <p className="text-xs text-muted-foreground">{rec.productId}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={getConfidenceBadgeVariant(rec.confidence)}
                    className="text-xs"
                  >
                    {rec.confidence}% match
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-3 w-3" />
                      <span className="text-muted-foreground">Support</span>
                    </div>
                    <div className="font-semibold">{rec.support}%</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-muted-foreground">Lift</span>
                    </div>
                    <div className="font-semibold">{rec.lift}x</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <ShoppingBag className="h-3 w-3" />
                      <span className="text-muted-foreground">Sales</span>
                    </div>
                    <div className="font-semibold">{rec.sales}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4 border-t border-border">
              <Button 
                variant="primary-gradient" 
                className="w-full" 
                size="lg"
                onClick={() => navigate('/email-editor')}
              >
                Use in Campaign
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RecommendationEngine;