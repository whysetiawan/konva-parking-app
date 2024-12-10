import { KonvaEventObject } from "konva/lib/Node";
import React, { useState } from "react";
import { Rect, Group, Text } from "react-konva";
import { Vehicle } from "../../store/parking";

/**
 * Represents the props for the ParkingLot component.
 *
 * @interface ParkingLotProps
 */
interface ParkingLotProps {
  /**
   * The unique identifier of the parking lot.
   *
   */
  id: number;
  /**
   * The x-coordinate of the parking lot's position.
   */
  x: number;

  /**
   * The y-coordinate of the parking lot's position.
   */
  y: number;

  /**
   * The width of the parking lot.
   */
  width: number;

  /**
   * The height of the parking lot.
   */
  height: number;

  /**
   * The status of the parking lot indicating occupancy (true) or vacancy (false).
   */
  available: boolean;

  /**
   * The vehicle currently parked in the parking lot.
   */
  vehicle?: Vehicle;

  /**
   * Indicates whether the parking lot is currently selected.
   * Optional property.
   */
  isSelected?: boolean;

  options?: {
    /**
     * Color of the parking lot when it is occupied.
     * Optional property.
     * Default: 'lightgrey'
     */
    occupiedColor?: string;

    /**
     * Color of the parking lot when it is vacant.
     * Optional property.
     * Default: '#47A992'
     */
    vacantColor?: string;
  };

  /**
   * Callback function invoked when the parking lot is clicked.
   * Optional property.
   */
  onClick?: (e: KonvaEventObject<MouseEvent>) => void;

  /**
   * Callback function invoked when the parking lot is mouse entered (hovered).
   * Optional property.
   */
  onMouseEnter?: (e: KonvaEventObject<MouseEvent>) => void;

  /**
   * Callback function invoked when the parking lot is mouse entered (hovered).
   * Optional property.
   */
  onMouseLeave?: (e: KonvaEventObject<MouseEvent>) => void;

  /**
   * Callback function invoked when the parking lot is right-clicked.
   * Optional property.
   */
  onContextMenu?: (e: KonvaEventObject<PointerEvent>) => void;

  /**
   * Callback function invoked when the parking lot is double-clicked.
   * Optional property.
   */
  onDoubleClick?: (e: KonvaEventObject<PointerEvent>) => void;
}

const ParkingLot: React.FC<ParkingLotProps> = ({
  id,
  x,
  y,
  width,
  height,
  available,
  isSelected,
  options = {
    vacantColor: "lightgrey",
    occupiedColor: "#47A992",
  },
  onClick,
  onContextMenu,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Group>
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={available ? options.vacantColor : options.occupiedColor}
        stroke={"black"}
        cornerRadius={3}
        strokeWidth={1}
        strokeEnabled={isSelected}
        draggable={false}
        opacity={isHovered ? 0.7 : 1}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={onClick}
        onDblClick={onDoubleClick}
        onContextMenu={onContextMenu}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

      <Text x={x + width / 4} y={y + height / 4} text={id.toString()}></Text>
    </Group>
  );
};

export default ParkingLot;
