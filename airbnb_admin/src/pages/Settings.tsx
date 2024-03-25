import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">예약관련 설정 업데이트</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
