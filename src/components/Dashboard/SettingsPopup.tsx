import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Settings, Mail, Bell, Shield, Palette } from 'lucide-react';

interface SettingsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPopup: React.FC<SettingsPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Marketing Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Email Settings */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Email Configuration</h4>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="sender-name">Sender Name</Label>
                  <Input id="sender-name" defaultValue="Marketing Buddy" />
                </div>
                <div>
                  <Label htmlFor="sender-email">Sender Email</Label>
                  <Input id="sender-email" defaultValue="hello@marketingbuddy.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="reply-to">Reply-To Email</Label>
                <Input id="reply-to" defaultValue="support@marketingbuddy.com" />
              </div>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-4 w-4 text-warning" />
              <h4 className="font-medium">Notifications</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive campaign performance updates</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-reports">Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Get weekly analytics summaries</p>
                </div>
                <Switch id="weekly-reports" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="campaign-alerts">Campaign Alerts</Label>
                  <p className="text-sm text-muted-foreground">Alerts for campaign milestones</p>
                </div>
                <Switch id="campaign-alerts" />
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4 text-success" />
              <h4 className="font-medium">Security & Privacy</h4>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="data-tracking">Data Tracking</Label>
                  <p className="text-sm text-muted-foreground">Allow analytics data collection</p>
                </div>
                <Switch id="data-tracking" defaultChecked />
              </div>
            </div>
          </Card>

          {/* Theme Settings */}
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="h-4 w-4 text-secondary" />
              <h4 className="font-medium">Appearance</h4>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <Button variant="outline" size="sm">Light</Button>
                  <Button variant="primary-gradient" size="sm">Dark</Button>
                  <Button variant="outline" size="sm">Auto</Button>
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="compact-view">Compact View</Label>
                  <p className="text-sm text-muted-foreground">Show more content in less space</p>
                </div>
                <Switch id="compact-view" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary-gradient">
            Save Settings
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPopup;