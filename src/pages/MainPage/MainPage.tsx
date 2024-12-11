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
import EndReservationDialog from "./EndReservationDialog";

const MainPage: React.FC = () => {
  const [selectedLotAtom, setSelectedLotAtom] =
    useState<PrimitiveAtom<IParkingLot> | null>(null);
  const [parkingLots] = useAtom(parkingLotAtom);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isEndReserveOpen, setIsEndReserveOpen] = useState(false);
  const parkingSpaceRef = useRef<ParkingSpaceRef>(null);

  const selectedLot = parkingLots.find((lot) => lot === selectedLotAtom);

  return (
    <>
      <div className="flex flex-col md:flex-row items-start py-4 px-8 gap-2 h-screen">
        <div className="w-full md:w-main-content aspect-[2.2/1]">
          <ParkingSpace
            ref={parkingSpaceRef}
            src="/demo-parking-floormap.jpg"
            className="w-full h-full md:rotate-0 md:w-main-content"
          >
            {parkingLots.map((lot, index) => {
              return (
                <ParkingLotProxy
                  key={index}
                  parkingLotAtom={lot}
                  onClick={() => {
                    setSelectedLotAtom(lot);
                  }}
                />
              );
            })}
            {selectedLot && (
              <ReservationInfo
                parkingLot={selectedLot}
                onClose={() => {
                  setSelectedLotAtom(null);
                  setIsReserveOpen(false);
                }}
                onReserve={() => setIsReserveOpen(true)}
                onEndReserve={() => {
                  setIsEndReserveOpen(true);
                  setIsReserveOpen(false);
                }}
              />
            )}
          </ParkingSpace>

          {selectedLotAtom && (
            <EndReservationDialog
              selectedLotAtom={selectedLotAtom}
              open={isEndReserveOpen}
              onOpenChange={setIsEndReserveOpen}
            />
          )}
        </div>
        <div className="w-full md:w-[400px]">
          {isReserveOpen && selectedLotAtom && (
            <ReservationForm selectedLotAtom={selectedLotAtom} />
          )}
        </div>
      </div>
    </>
  );
};

const ParkingLotProxy: React.FC<{
  parkingLotAtom: PrimitiveAtom<IParkingLot>;
  onClick: () => void;
}> = (props) => {
  const [lot] = useAtom(props.parkingLotAtom);

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
