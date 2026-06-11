import { ChatPanel } from "@/src/widgets/chat/ui/ChatPanel";
import { MessageComposer } from "@/src/widgets/message-composer/ui/MessageComposer";
import { SessionHeader } from "@/src/widgets/session-header/ui/SessionHeader";

type SessionPageProps = {
  params: Promise<{ sessionId: string }>;
};

export default async function SessionPage({ params }: SessionPageProps) {
  return (
    <>
      <SessionHeader />
      <ChatPanel />
      <MessageComposer />
    </>
  );
}
