import { PrimitiveAtom, useAtom } from "jotai";
import { IParkingLot } from "../../store/parking";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogContent,
  DialogFooter,
} from "../../components/ui/dialog";
import { memo } from "react";

interface EndReservationDialogProps {
  selectedLotAtom: PrimitiveAtom<IParkingLot>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EndReservationDialog: React.FC<EndReservationDialogProps> = ({
  selectedLotAtom,
  open,
  onOpenChange,
}) => {
  console.log("OPEN", open);
  const [selectedLot, setSelectedLot] = useAtom(selectedLotAtom);

  return (
    <Dialog defaultOpen={false} open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>Reserved Lot #{selectedLot.id}</DialogTitle>
        <DialogDescription>
          End reservation for lot #{selectedLot.id}?
        </DialogDescription>
        <DialogFooter>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() => {
              setSelectedLot((prev) => ({
                ...prev,
                vehicle: undefined,
              }));
              onOpenChange(false);
            }}
          >
            End
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(EndReservationDialog);
