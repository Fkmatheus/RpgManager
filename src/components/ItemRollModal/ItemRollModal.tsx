import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react";
import Confetti from "react-confetti";

interface ItemRollModal {
  isOpen: boolean;
  onClose: () => void;
  tableName: string;
  showConfetti: boolean;
  loading: boolean;
}

export function ItemRollModal({isOpen, onClose, tableName, showConfetti, loading}: ItemRollModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      )}
      <ModalContent>
        <ModalHeader
          fontFamily={"Cinzel"}
          color={"white"}
          backgroundColor={"#111111"}
        >
          {tableName}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontFamily={"Cinzel"} backgroundColor={"#161616"}>
          {loading ? (
            <Spinner
              size="xl"
              thickness="6px"
              speed="0.7s"
              color="tomato"
              emptyColor="white"
            />
          ) : (
            <>
              <Text>Resultado aqui 😏</Text>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
