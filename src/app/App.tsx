import { useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { OnboardingScreens } from "./components/OnboardingScreens";
import { AuthScreen } from "./components/AuthScreen";
import { HomeDashboard } from "./components/HomeDashboard";
import { MaterialSelection } from "./components/MaterialSelection";
import { CostCalculation } from "./components/CostCalculation";
import { ReportScreen } from "./components/ReportScreen";
import { ProfileScreen } from "./components/ProfileScreen";

type Screen = "splash" | "onboarding" | "auth" | "home" | "materials" | "calculation" | "report" | "profile";

interface Material {
  id: string;
  name: string;
  icon: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("splash");
  const [houseArea, setHouseArea] = useState<number>(0);
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);

  const handleStartEstimation = (area: number) => {
    setHouseArea(area);
    setCurrentScreen("materials");
  };

  const handleMaterialsComplete = (materials: Material[]) => {
    setSelectedMaterials(materials);
    setCurrentScreen("calculation");
  };

  return (
    <div className="size-full overflow-auto">
      {currentScreen === "splash" && (
        <SplashScreen onComplete={() => setCurrentScreen("onboarding")} />
      )}

      {currentScreen === "onboarding" && (
        <OnboardingScreens onComplete={() => setCurrentScreen("auth")} />
      )}

      {currentScreen === "auth" && (
        <AuthScreen onComplete={() => setCurrentScreen("home")} />
      )}

      {currentScreen === "home" && (
        <HomeDashboard
          onStartEstimation={handleStartEstimation}
          onNavigate={(screen) => setCurrentScreen(screen as Screen)}
        />
      )}

      {currentScreen === "materials" && (
        <MaterialSelection
          houseArea={houseArea}
          onComplete={handleMaterialsComplete}
          onBack={() => setCurrentScreen("home")}
        />
      )}

      {currentScreen === "calculation" && (
        <CostCalculation
          materials={selectedMaterials}
          onBack={() => setCurrentScreen("materials")}
          onViewReport={() => setCurrentScreen("report")}
        />
      )}

      {currentScreen === "report" && (
        <ReportScreen
          materials={selectedMaterials}
          onBack={() => setCurrentScreen("calculation")}
          onHome={() => setCurrentScreen("home")}
        />
      )}

      {currentScreen === "profile" && (
        <ProfileScreen onBack={() => setCurrentScreen("home")} />
      )}
    </div>
  );
}