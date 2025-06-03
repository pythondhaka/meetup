
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, User, Mail, Phone, Building } from "lucide-react";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  paymentMethod: 'bkash' | 'card';
  bkashNumber?: string;
}

export const RegistrationForm = ({ open, onOpenChange }: RegistrationFormProps) => {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'card'>('bkash');
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      paymentMethod: 'bkash',
      bkashNumber: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Registration data:', data);
    setStep('payment');
  };

  const handlePayment = () => {
    // Mock payment processing
    setTimeout(() => {
      setStep('success');
      toast({
        title: "Payment Successful!",
        description: "Thank you for registering. We will be in touch soon!",
      });
    }, 2000);
  };

  const resetForm = () => {
    setStep('details');
    setPaymentMethod('bkash');
    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-python-blue">
            {step === 'details' && 'Register for Meetup'}
            {step === 'payment' && 'Payment Details'}
            {step === 'success' && 'Registration Complete!'}
          </DialogTitle>
        </DialogHeader>

        {step === 'details' && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                rules={{ required: 'Full name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email'
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                rules={{ required: 'Phone number is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+880 1XXXXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="organization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      Organization (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your company/university" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button type="submit" className="w-full bg-python-yellow hover:bg-python-yellow-dark text-python-blue-dark font-bold">
                  Continue to Payment
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 'payment' && (
          <div className="space-y-6">
            <div className="text-center">
              <Badge className="bg-python-yellow text-python-blue-dark text-lg px-4 py-2">
                Registration Fee: ৳300
              </Badge>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Select Payment Method</Label>
              
              <div className="grid grid-cols-2 gap-3">
                <Card 
                  className={`cursor-pointer border-2 transition-all ${paymentMethod === 'bkash' ? 'border-pink-500 bg-pink-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('bkash')}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-pink-600">bKash</div>
                  </CardContent>
                </Card>

                <Card 
                  className={`cursor-pointer border-2 transition-all ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-semibold text-blue-600">Card</div>
                  </CardContent>
                </Card>
              </div>

              {paymentMethod === 'bkash' && (
                <div className="space-y-3">
                  <Label htmlFor="bkash-number">bKash Number</Label>
                  <Input 
                    id="bkash-number"
                    placeholder="01XXXXXXXXX" 
                    value={form.watch('bkashNumber') || ''}
                    onChange={(e) => form.setValue('bkashNumber', e.target.value)}
                  />
                  <div className="text-xs text-gray-600">
                    You will receive a payment request on this number
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="text-center text-gray-500 py-4">
                  Card payment coming soon...
                </div>
              )}
            </div>

            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setStep('details')}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handlePayment}
                disabled={paymentMethod === 'bkash' && !form.watch('bkashNumber')}
                className="flex-1 bg-python-yellow hover:bg-python-yellow-dark text-python-blue-dark font-bold"
              >
                Pay ৳300
              </Button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center space-y-6 py-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">✓</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-600 mb-2">Thank you for registering!</h3>
              <p className="text-gray-600">
                We have received your registration for Python Bangladesh Meetup. 
                We will be in touch with event details and confirmation soon.
              </p>
            </div>

            <div className="bg-python-yellow/10 rounded-lg p-4">
              <p className="text-sm text-python-blue-dark">
                <strong>What's next?</strong><br />
                Check your email for confirmation and event updates. 
                Join our Discord community for latest announcements!
              </p>
            </div>

            <Button 
              onClick={resetForm}
              className="w-full bg-python-blue hover:bg-python-blue-dark text-white"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
