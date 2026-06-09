import { ChatPanel } from "../widgets/chat/ui/ChatPanel";
import { MessageComposer } from "../widgets/message-composer/ui/MessageComposer";
import { SessionHeader } from "../widgets/session-header/ui/SessionHeader";
import { AppSidebar } from "../widgets/sidebar/ui/AppSidebar";

export default function Page() {
  return (
    <>
      <AppSidebar />

      <div className="w-screen h-screen">
        <main className="ml-90 flex flex-col h-full">
          <SessionHeader />
          <ChatPanel />
          <MessageComposer />
        </main>
      </div>
    </>
  );
}
