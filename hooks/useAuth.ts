import { useAppContext } from "@/contexts/AppContext";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export function useAuth() {
    const { address, isConnected } = useAccount();

    const { setAddress, setIsConnected } = useAppContext();
    const { connect, isLoading: connectLoading } = useConnect({
        connector: new InjectedConnector(),
    });

    const { disconnect,isLoading:disconnectLoading } = useDisconnect();

    const handleConnect = () => {
        try {
            connect();
            setAddress(address ?? "");
            setIsConnected(isConnected);
        } catch (e) {
            console.log("Error connecting: " + e);
        }
    };

    const handleDisconnect = () => {
        try {
            disconnect();
            setAddress(address ?? "");
            setIsConnected(isConnected);
        } catch (e) {
            console.log("Error disconnecting: " + e);
        }
    };

    return {
        address,
        isConnected,
        connect,
        handleConnect,
        handleDisconnect,
        connectLoading,
        disconnectLoading,
    };
}
