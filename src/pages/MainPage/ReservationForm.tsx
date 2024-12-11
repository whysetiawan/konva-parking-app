import { useAtom } from "jotai";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { IParkingLot } from "../../store/parking";
import { PrimitiveAtom } from "jotai";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogDescription,
} from "../../components/ui/dialog";
import { DialogHeader } from "../../components/ui/dialog";
import { useRef } from "react";

interface ReservationFormProps {
  selectedLotAtom: PrimitiveAtom<IParkingLot>;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  selectedLotAtom,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [parkingLot, setParkingLot] = useAtom(selectedLotAtom);

  const _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const vehicleNo = formData.get("vehicle-no") as string;
    const name = formData.get("name") as string;
    setParkingLot((prev) => ({
      ...prev,
      vehicle: {
        ...prev.vehicle,
        name,
        no: vehicleNo,
        startTime: new Date(),
        type: prev.vehicle?.type || "car",
      },
    }));
  };

  return (
    <Card className="block p-4 space-y-4">
      <h2 className="font-bold">Reserve Lot #{parkingLot.id}</h2>
      <form ref={formRef} onSubmit={_onSubmit} className="space-y-3">
        <Input name="vehicle-no" placeholder="Vehicle No." />
        <Input name="name" placeholder="Full Name" />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Save</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogClose></DialogClose>
              <DialogTitle>Reserving Lot #{parkingLot.id}</DialogTitle>
              <DialogDescription>
                Are you sure want to reserve?
              </DialogDescription>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={() => {
                    formRef.current?.dispatchEvent(
                      new Event("submit", {
                        bubbles: true,
                      })
                    );
                  }}
                >
                  Confirm
                </Button>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </form>
    </Card>
  );
};

export default ReservationForm;
