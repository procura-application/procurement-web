export default function ThemeTest() {
    return (
        <div className="min-h-screen bg-background p-10">
            <div className="space-y-6">

                <h1 className="text-3xl font-bold text-foreground">
                    ProcureFlow
                </h1>

                <p className="text-muted-foreground">
                    Procurement management platform
                </p>

                <div className="flex gap-4">
                    <button className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground">
                        Create Request
                    </button>

                    <button className="rounded-lg bg-gold px-5 py-2.5 font-semibold text-primary-foreground">
                        Gold Action
                    </button>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                    <h2 className="font-bold text-card-foreground">
                        Purchase Requests
                    </h2>

                    <p className="mt-2 text-muted-foreground">
                        128 requests
                    </p>
                </div>

            </div>
        </div>
    );
}