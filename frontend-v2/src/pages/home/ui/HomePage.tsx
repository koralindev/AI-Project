import { AppSidebar } from "@/src/widgets/sidebar/ui/AppSidebar";
import { SessionHeader } from "@/src/widgets/session-header/ui/SessionHeader";
import { MessageComposer } from "@/src/widgets/message-composer/ui/MessageComposer";
import { ChatPanel } from "@/src/widgets/chat/ui/ChatPanel";
import { SessionCreateModal } from "@/src/widgets/session-create/ui/SessionCreateModal";

export const HomePage = () => {
  return (
    <>
      <AppSidebar />

      <div className="w-screen h-screen ">
        <main className="ml-90 flex flex-col h-full">
          <SessionHeader />
          <ChatPanel />
          <MessageComposer />
          <SessionCreateModal />
        </main>
      </div>
    </>
  );
};
