import { useAtom } from "jotai";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { IParkingLot } from "../../store/parking";
import { PrimitiveAtom } from "jotai";

interface ReservationFormProps {
  selectedLotAtom: PrimitiveAtom<IParkingLot>;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  selectedLotAtom,
}) => {
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
    <Card className="hidden sm:block p-4 space-y-4">
      <h2 className="font-bold">Reserve Lot #{parkingLot.id}</h2>
      <form onSubmit={_onSubmit} className="space-y-3">
        <Input name="vehicle-no" placeholder="Vehicle No." />
        <Input name="name" placeholder="Full Name" />
        <Button>Confirm</Button>
      </form>
    </Card>
  );
};

export default ReservationForm;
