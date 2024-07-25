import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// export interface OrderDetailsProps{

// }

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: sdajkldjaskld1312</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="font-medium text-muted-foreground">
                  Pendente
                </span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  Ryan Martins
                </span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  931925250
                </span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  ryan@email.com
                </span>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <span className="font-medium text-muted-foreground">
                  3 minutos atrás
                </span>
              </div>
            </TableCell>
          </TableRow>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperoni Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Peperoni Família</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$69,90</TableCell>
              <TableCell className="text-right">R$139,80</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 359,80
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
