import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "state/store";
import {
  ContainerInner,
  ContainerOuter,
  Header,
  ImportResume,
  Modal,
} from "components";
import { About, ResumeImport } from "containers";
import { openModal } from "state/features/modalSlice";
import "components/site-theme/fonts/fonts.scss";

enum CONTAINERS {
  RESUME_IMPORT = "resume_import",
  ABOUT = "about",
}

const ContainerElement: React.FC<{ activeContainer: string }> = ({
  activeContainer,
}) => (
  <>
    {activeContainer === CONTAINERS.RESUME_IMPORT && <ResumeImport />}
    {activeContainer === CONTAINERS.ABOUT && <About />}
  </>
);

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const [activeContainer, setActiveContainer] = useState<CONTAINERS>(
    CONTAINERS.RESUME_IMPORT
  );

  const menuClick = (container: CONTAINERS) => {
    setActiveContainer(container);
    if (container === "resume_import") {
      dispatch(openModal(""));
    }
  };

  return (
    <ContainerOuter>
      {isOpen && (
        <Modal>
          <ImportResume />
        </Modal>
      )}
      <Header menuClick={(container: CONTAINERS) => menuClick(container)} />
      <ContainerInner>
        <ContainerElement activeContainer={activeContainer} />
      </ContainerInner>
    </ContainerOuter>
  );
}

export default App;
