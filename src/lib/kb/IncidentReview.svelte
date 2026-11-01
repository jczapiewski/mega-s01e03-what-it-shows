<script lang="ts">
import reports from '#lib/data/reports-4471.json';
import notes from '#lib/data/desk-notes.json';
import { uniqueById, groupByCause, type Report } from '#lib/kb/causes';
import { tenantOf } from '#lib/kb/locales';
const unique = uniqueById(reports as Report[]).filter(r => r.mergedInto === 4471);
const groups = groupByCause(unique, tenantOf);
const residual = unique.filter(r => notes.oneDayMove.includes(r.id));
const months = [...new Set(unique.map(r => r.mergedAt?.slice(0,7)))].sort();
</script>
<p>{reports.length} export rows; {unique.length} unique reports; {reports.length - unique.length} overlapping rows removed by ID.</p>
<table><thead><tr><th>Classification in running code</th><th>Reports</th><th>Tenants</th><th>Received</th></tr></thead><tbody>
{#each groups as g}<tr><td>{g.cause}</td><td>{g.reports.length}</td><td>{g.tenants}</td><td>{g.firstSeen} → {g.lastSeen}</td></tr>{/each}
</tbody></table>
<p>The parser bucket contains {residual.length} reports marked by the desk as a one-day move. These are included in its total, not additional reports. Their root cause is unconfirmed; a timezone or date-boundary fault is a hypothesis, not a finding.</p>
<table><thead><tr><th>Report</th><th>Tenant</th><th>Evidence needing investigation</th></tr></thead><tbody>{#each residual as r}<tr><td>{r.id}</td><td>{r.tenant}</td><td>{r.body}</td></tr>{/each}</tbody></table>
<h3>Queue activity</h3>
<ul>{#each months as month}<li>{month}: {unique.filter(r=>r.mergedAt?.startsWith(month ?? '')).length} reports merged.</li>{/each}</ul>
<p>Compare receipt time with merge time: the early-July batch is not evidence of a July onset. Reports began in April and continued through October. “Known” and “fix queued” do not establish that a fix shipped or that reports stopped.</p>
