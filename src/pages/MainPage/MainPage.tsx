import ParkingSpace, {
  ParkingSpaceRef,
} from "../../components/composed/parking-space";
import ParkingLot from "../../components/composed/parking-lot";
import { useAtom } from "jotai";
import { IParkingLot, parkingLotAtom } from "../../store/parking";
import { useRef, useState } from "react";
import ReservationInfo from "./ReservationInfo";
import ReservationForm from "./ReservationForm";
import { PrimitiveAtom } from "jotai";

const MainPage: React.FC = () => {
  const [selectedLotId, setSelectedLotId] =
    useState<PrimitiveAtom<IParkingLot> | null>(null);
  const [parkingLots] = useAtom(parkingLotAtom);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const parkingSpaceRef = useRef<ParkingSpaceRef>(null);

  const selectedLot = parkingLots.find((lot) => lot === selectedLotId);

  return (
    <div className="flex flex-row items-start py-4 px-8 gap-x-2 h-screen">
      <ParkingSpace
        ref={parkingSpaceRef}
        src="src/assets/demo-parking-floormap.jpg"
        className="w-full h-auto sm:h-full sm:rotate-0 sm:w-main-content"
      >
        {parkingLots.map((lot) => {
          return (
            <ParkingLotProxy
              parkingLotAtom={lot}
              onClick={() => {
                setSelectedLotId(lot);
              }}
            />
          );
        })}
        {selectedLot && (
          <ReservationInfo
            parkingLot={selectedLot}
            onClose={() => {
              setSelectedLotId(null);
              setIsReserveOpen(false);
            }}
            onReserve={() => setIsReserveOpen(true)}
            onEndReserve={() => setIsReserveOpen(false)}
          />
        )}
      </ParkingSpace>
      <div className="w-0 sm:w-[400px]">
        {isReserveOpen && selectedLotId && (
          <ReservationForm selectedLotAtom={selectedLotId} />
        )}
      </div>
    </div>
  );
};

const ParkingLotProxy: React.FC<{
  parkingLotAtom: PrimitiveAtom<IParkingLot>;
  onClick: () => void;
}> = (props) => {
  const [lot] = useAtom(props.parkingLotAtom);
  console.log("proxy re-render", lot);
  return (
    <ParkingLot
      available={!!lot.vehicle}
      height={lot.height}
      id={lot.id}
      width={lot.width}
      x={lot.coorX}
      y={lot.coorY}
      key={lot.id}
      onClick={props.onClick}
    />
  );
};

export default MainPage;
