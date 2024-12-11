import { Group, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { IParkingLot, Vehicle } from "../../store/parking";
import { Html } from "react-konva-utils";
import { PrimitiveAtom, useAtom } from "jotai";
import { useRef } from "react";

interface ReservationInfoProps {
  parkingLot: PrimitiveAtom<IParkingLot>;
  onClose: () => void;
  onReserve: () => void;
  onEndReserve: () => void;
}

const ReservationInfo: React.FC<ReservationInfoProps> = ({
  onClose,
  onReserve,
  parkingLot,
  onEndReserve,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [selectedLot] = useAtom(parkingLot);

  const vehicleInfo = selectedLot.vehicle;

  const isAvailable = !vehicleInfo;

  return (
    <Group
      x={selectedLot.coorX}
      y={selectedLot.coorY - (cardRef.current?.clientHeight ?? 0) - 10}
    >
      <Html>
        <Card ref={cardRef} className="border-none shadow-lg p-4 space-y-2">
          <X className="absolute right-1 cursor-pointer" onClick={onClose} />
          <h1 className="text-2xl font-bold">#{selectedLot.id}</h1>
          <span className="block text-sm">
            Available: {isAvailable ? "Yes" : "No"}
          </span>

          {!isAvailable && (
            <>
              <VehicleInfo {...vehicleInfo} />
              <Button onClick={onEndReserve}>End Reserve</Button>
            </>
          )}

          {isAvailable && <Button onClick={onReserve}>Reserve</Button>}
        </Card>
        <div className="w-0 h-0 ml-3 bottom-1 border-l-transparent border-r-transparent border-l-[10px] border-r-[10px] border-t-[15px] border-t-white border-t-[px]" />
      </Html>
    </Group>
  );
};

const VehicleInfo: React.FC<Vehicle> = ({
  name,
  no,
  startTime,
  type,
  endTime,
}) => {
  return (
    <div className="space-y-2">
      <span className="block text-sm">
        Vehicle No: <span className="font-bold">{no}</span>
      </span>
      <span className="block text-sm">
        Vehicle Type: <span className="font-bold">{type}</span>
      </span>
      <span className="block text-sm">
        Vehicle Name: <span className="font-bold">{name}</span>
      </span>
    </div>
  );
};

export default ReservationInfo;
