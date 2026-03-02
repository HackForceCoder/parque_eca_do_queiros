import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginDialogProps {
  isAdmin: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const LoginDialog = ({ isAdmin, onLogin, onLogout }: LoginDialogProps) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  if (isAdmin) {
    return (
      <Button variant="outline" size="sm" onClick={onLogout} className="gap-2">
        <LogOut className="h-4 w-4" />
        Cerrar sesión
      </Button>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "admin" && password === "Vivero26") {
      onLogin();
      setOpen(false);
      setUser("");
      setPassword("");
      toast({ title: "Sesión iniciada", description: "Bienvenido, administrador." });
    } else {
      toast({ title: "Error", description: "Usuario o contraseña incorrectos.", variant: "destructive" });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <LogIn className="h-4 w-4" />
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display">Iniciar sesión</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="user">Usuario</Label>
            <Input id="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Usuario" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
