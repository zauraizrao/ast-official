import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, FileText, File } from "lucide-react";
import { Athlete } from "@/pages/Athletes";

interface AthleteDetailProps {
  athlete: Athlete;
}

export const AthleteDetail = ({ athlete }: AthleteDetailProps) => {
  return (
    <div className="p-8">
      {/* Profile Header */}
      <div className="flex items-start gap-6 mb-8">
        <Avatar className="h-24 w-24 border-4 border-primary/20">
          <AvatarImage src={athlete.avatar} alt={athlete.name} />
          <AvatarFallback className="text-2xl">{athlete.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground mb-1">{athlete.name}</h1>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span>età: {athlete.age}</span>
            <span>Genere: {athlete.gender}</span>
            <Badge className="bg-primary text-primary-foreground">Uomo</Badge>
          </div>

          <div className="flex gap-3">
            <Button className="bg-primary hover:bg-primary/90">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messaggio
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Visualizza profilo
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="panoramica" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="panoramica">Panoramica</TabsTrigger>
          <TabsTrigger value="progressi">Progressi</TabsTrigger>
          <TabsTrigger value="checkin">Check-in</TabsTrigger>
          <TabsTrigger value="piani">Piani</TabsTrigger>
          <TabsTrigger value="documenti">Documenti</TabsTrigger>
        </TabsList>

        <TabsContent value="panoramica" className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* Dati personali */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Dati personali
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peso</span>
                    <span className="font-medium text-foreground">{athlete.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Altezza</span>
                    <span className="font-medium text-foreground">{athlete.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Età</span>
                    <span className="font-medium text-foreground">{athlete.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Genere</span>
                    <span className="font-medium text-foreground">{athlete.gender}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documenti */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Documenti</h3>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center"
                    >
                      <File className="w-6 h-6 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sottoscrizione */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Sottoscrizione
                </h3>
                <div className="space-y-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {athlete.subscription}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Scade {athlete.subscriptionExpiry}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Progressi */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Progressi</h3>
                <div className="relative">
                  <div className="w-full h-32 relative">
                    <svg viewBox="0 0 200 100" className="w-full h-full">
                      <path
                        d="M 10,90 Q 50,30 100,50 T 190,20"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-foreground">{athlete.progress}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Check-in */}
            <Card className="col-span-2">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Check-in</h3>
                <p className="text-sm text-muted-foreground mb-4">Tempo: MAR 12</p>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 bg-muted rounded-lg overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/shapes/svg?seed=${i}`}
                        alt={`Check-in ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Ai suggerito:</p>
                  <p className="text-sm text-muted-foreground">Aumenta le calorie</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="progressi">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Progress tracking content...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checkin">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Check-in history...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="piani">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Training plans...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documenti">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Documents list...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
