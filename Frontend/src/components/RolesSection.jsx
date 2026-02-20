import RoleCard from "./RoleCard";

export default function RolesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RoleCard
          title="Supervisor"
          theme="blue"
          description="High-level oversight for data verification, trend analysis, and administrative reporting."
          features={["Live monitoring dashboard", "Image & GPS verification", "Automated flood alerts"]}
          buttonText="Access Admin Panel"
        />

        <RoleCard
          title="Field Worker"
          theme="green"
          description="Reliable data entry from site locations with mandatory biometric and geo-tagging."
          features={["Geofencing validation", "Mandatory live photo", "Offline synchronization"]}
          buttonText="Worker Portal"
        />

        <RoleCard
          title="Public Source"
          theme="gray"
          description="Empowering citizens to contribute to community safety through crowdsourced images."
          features={["Fast image upload", "Auto-location tagging", "Anonymous reporting"]}
          buttonText="Submit Observation"
        />
      </div>
    </section>
  );
}