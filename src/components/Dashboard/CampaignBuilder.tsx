import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Users, 
  Settings, 
  Play, 
  FileText, 
  Target,
  Calendar,
  Sparkles
} from 'lucide-react';
import BuddyMascot from '@/components/BuddyMascot';

interface CampaignBuilderProps {
  onLaunchEditor?: () => void;
  onSelectDataFeed?: (feedId: string) => void;
  onOpenSettings?: () => void;
  onOpenABTest?: () => void;
  onOpenSchedule?: () => void;
}

const CampaignBuilder: React.FC<CampaignBuilderProps> = ({ 
  onLaunchEditor,
  onSelectDataFeed,
  onOpenSettings,
  onOpenABTest,
  onOpenSchedule
}) => {
  const navigate = useNavigate();
  const [selectedFeed, setSelectedFeed] = useState<string>('');
  const [campaignName, setCampaignName] = useState('');

  // Mock data feeds
  const dataFeeds = [
    {
      id: 'high_value_customers',
      name: 'High Value Customers',
      recipients: 1247,
      lastUpdated: '2 hours ago',
      segments: ['platinum', 'gold']
    },
    {
      id: 'new_subscribers',
      name: 'New Subscribers',
      recipients: 3420,
      lastUpdated: '1 day ago',
      segments: ['new', 'unengaged']
    },
    {
      id: 'inactive_users',
      name: 'Re-engagement List',
      recipients: 892,
      lastUpdated: '3 hours ago',
      segments: ['inactive', 'churned']
    }
  ];

  const handleSelectFeed = (feedId: string) => {
    setSelectedFeed(feedId);
    onSelectDataFeed?.(feedId);
  };

  const selectedFeedData = dataFeeds.find(feed => feed.id === selectedFeed);

  return (
    <Card className="card-buddy">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-warning/20">
            <Mail className="h-5 w-5 text-warning" />
          </div>
          <h3 className="text-lg font-semibold">Campaign Builder</h3>
          <BuddyMascot 
            variant="welcome" 
            size="sm" 
            message="Let's create something amazing!" 
          />
        </div>

        <div className="space-y-6">
          {/* Campaign Name */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-2 block">
              Campaign Name
            </label>
            <input
              type="text"
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
              placeholder="Q4 Product Launch Campaign"
              className="w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Data Feed Selection */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-3 block">
              Select Data Feed
            </label>
            <div className="space-y-2">
              {dataFeeds.map((feed) => (
                <div
                  key={feed.id}
                  onClick={() => handleSelectFeed(feed.id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedFeed === feed.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{feed.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {feed.recipients.toLocaleString()} recipients
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>Updated {feed.lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      <span>{feed.segments.join(', ')}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Feed Summary */}
          {selectedFeedData && (
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium text-sm">Selected Audience</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Recipients:</span>
                  <div className="font-semibold text-primary">{selectedFeedData.recipients.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Segments:</span>
                  <div className="font-semibold">{selectedFeedData.segments.length}</div>
                </div>
              </div>
            </div>
          )}

          {/* Email Builder Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Email Content</span>
            </div>
            
            <Button
              variant={selectedFeed ? "buddy" : "outline"}
              size="lg"
              className="w-full"
              onClick={() => navigate(`/email-editor?campaign=${selectedFeed}`)}
              disabled={!selectedFeed}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Launch Email Editor
            </Button>
            
            {!selectedFeed && (
              <p className="text-xs text-muted-foreground text-center">
                Select a data feed to start building your email
              </p>
            )}
          </div>

          {/* Campaign Actions */}
          <div className="pt-4 border-t border-border space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                size="sm"
                onClick={onOpenSettings}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={onOpenABTest}
              >
                <Target className="h-4 w-4 mr-2" />
                A/B Test
              </Button>
            </div>
            
            <Button
              variant="success-gradient"
              size="lg"
              className="w-full"
              disabled={!selectedFeed || !campaignName}
              onClick={onOpenSchedule}
            >
              <Play className="h-4 w-4 mr-2" />
              Schedule Campaign
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CampaignBuilder;